"""
	This is to create one big JSON file, so that I can go through it and create MongoDB commands from it.
"""
import json

pkmn_names_str = ""
shakespearedex_str = ""

names_file = open("name_dump.txt", "r", encoding="utf-8")
# The web-scraper has dumped its data in one long unbroken line.
pkmn_names_array = names_file.read().split("::::")
for name in pkmn_names_array:
	print("Name: " + name)
shakespearedex_str = open("shakespearedump.txt", "r", encoding="utf-8")
dex_entries_array = shakespearedex_str.read().split("::::")
for i in range(0, 893):
	print(dex_entries_array[i])
	shakespearedex_dict = {"name": pkmn_names_array[i],
		"description": dex_entries_array[i].strip().capitalize()} #Cleaning up description's formatting and punctuation
	#Keep appending translated Pokedex files to the massive JSON file
	with open("shakespearemon.json", "a") as json_file:
		json.dump(shakespearedex_dict, json_file)

	