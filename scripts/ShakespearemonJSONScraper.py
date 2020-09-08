import requests
import json

base_url = "https://pokeapi.co/api/v2/pokemon-species/"
shakespeare_url = "https://api.funtranslations.com/translate/shakespeare.json"
HEADERS = {'user-agent': ('Mozilla/5.0 (Windows NT 10.0; Win64; x64)' 
	'AppleWebKit/537.36 (KHTML, like Gecko)' 
	'Chrome/85.0.4183.83 Safari/537.36'), 
	'referer': 'https://pokeapi.co/api/v2/'}

'''
	Scrapes JSON data from the specified URL.
'''
def get_json(url):
	# Add the headers to get around robots.txt
	response = requests.get(url, headers = HEADERS)
	if response.status_code == 200:
		print(response.status_code)
		return response.json()
	else:
		print(response.text)
		print(response.status_code)
	
# Loop through the entire Pokedex of 893 entries.
for i in range(1, 893):
	pokemon_json = get_json(base_url + str(i))
	pokemon_file = "pokedex/pokemon" + str(i) + ".json"
	pokemon_name = pokemon_json['name']
	pokedex_entries = pokemon_json['flavor_text_entries']
	for entry in pokedex_entries:
		# Skip the non-English entries
		if(entry['language']['name'] == "en"):
			pokedex_text = (entry['flavor_text'])
			# We've found an English entry, and in the spirit of Shakespearean English, 
			# we're going  to use what I assume is the oldest entry.
			break
	# This string is going to be sent to the Shakespeare translator, so it needs to be cleaned.
	pokedex_text = pokedex_text.replace("\n", " ").replace("\f", " ")
	# Send the data off for translation
	#response = requests.post(shakespeare_url, headers = HEADERS, data = {
	#	"text":pokedex_text})
	#if response.status_code == 200:
	#	print(response.status_code)
	#	shakespearedexdex = shakespeare_json['contents']['translated']
	print(pokemon_name + ": " + pokedex_text)
		# Create the JSON output
	pokemon_dict = {"name": pokemon_name,
			"description": pokedex_text}
		# Create/edit the JSON file
	with open(pokemon_file, 'w') as json_file:
		json.dump(pokemon_dict, json_file)
	"""else:
		print(response.text)
		print(response.status_code)

shakespeare_losty = requests.post(shakespeare_url, headers = HEADERS, 
	data = {
		"text":"And I wouldn't be fond of drinking but when I do go at it, I go at it awful and very hard. I do have four to five pints in about two hours. I'd have a packet of crisps then, and a maybe an auld packet of peanuts."})
print(shakespeare_losty.json())
"""