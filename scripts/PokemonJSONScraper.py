import requests
import json
import sys
import os

""" The Pokedex data is in JSON files, where the endpoints are suffixes to the below URL corresponding
	to that Pokemon's position in the National Pokedex as of Sword/Shield."""
base_url = "https://pokeapi.co/api/v2/pokemon-species/"
shakespeare_url = "https://api.funtranslations.com/translate/shakespeare.json"
HEADERS = {'user-agent': ('Mozilla/5.0 (Windows NT 10.0; Win64; x64)' 
	'AppleWebKit/537.36 (KHTML, like Gecko)' 
	'Chrome/85.0.4183.83 Safari/537.36'), 
	'referer': 'https://pokeapi.co/api/v2/'}

'''
	Scrapes JSON data from the specified URL.
	@param url: the URL with the desired JSON.
'''
def get_json(url):
	# Add the headers to get around robots.txt
	response = requests.get(url, headers = HEADERS)
	if response.status_code == 200:
		# GET request has been successful, now let's return the JSON
		print(url + " response = " + str(response.status_code))
		return response.json()
	else:
		print(response.text)
		print(response.status_code)
		return response.status_code
	
name_str, poke_str = "", ""
# Loop through the entire Pokedex of 893 entries, from Bulbasaur to Zarude
for i in range(1, 894): # 894 instead of 893 because range() excludes the end number
	pokemon_json = get_json(base_url + str(i))
	#Don't bother going any further with this "JSON"
	if pokemon_json==404:
		break
	# Create a unique file name for each Pokemon
	pokemon_file = "pokedex/pokemon" + str(i) + ".json"
	# We only need the name and Pokedex text, it's time to extract them from the JSON.
	pokemon_name = pokemon_json['name']
	pokedex_entries = pokemon_json['flavor_text_entries']
	for entry in pokedex_entries:
		# Skip the non-English entries
		if(entry['language']['name'] == "en"):
			pokedex_text = (entry['flavor_text'])
			# We've found an English entry, and in the spirit of Shakespearean English, 
			# we're going  to use what I assume is the oldest entry.
			break
	# I'm using this between each line in the string so that I know what to use in split() later.
	name_str += pokemon_name + "::::"
	poke_str += pokedex_text + "::::"
	# Create the JSON output
	pokemon_dict = {"name": pokemon_name,
		"description": pokedex_text}
	# Create/edit the JSON file for that Pokemon
	with open(pokemon_file, 'w') as json_file:
		json.dump(pokemon_dict, json_file)
		
with open("name_dump.txt", "w", encoding="utf-8") as text_file:
	text_file.write("{}".format(name_str))
"""
	The Shakespeare API doesn't have any character limits, so I can just write the whole Pokédex to this file,
	copy its contents and paste it in to get Shakespearean Pokédex data.
"""
with open("poke_dump.txt", "w", encoding="utf-8") as text_file:
	text_file.write("{}".format(poke_str))