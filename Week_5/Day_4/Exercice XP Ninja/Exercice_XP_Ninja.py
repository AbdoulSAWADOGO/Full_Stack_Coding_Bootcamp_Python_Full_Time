# Exercise 1 : Restaurant Menu Manager avec les expressions régulières
# Créez une nouvelle liste d'éléments spéciaux pour la Saint-Valentin dans le fichier json. Pour l'instant la liste devrait être vide.
import json
file  = "C:/Users/FANOSERVICES/Documents/Full_Stack_Coding_Bootcamp_Python_Full_Time/Week_5/Day_4/Exercice XP OR/restaurant_menu.json"

with open(file) as f:
    data = json.load(f)
try:
    print(len(data["valentine_items"]))
except:
    data["valentine_items"] = []
 

# Demandez au gestionnaire un nouvel élément Valentine à ajouter, si l'élément est correct (c'est-à-dire suit les règles ci-dessous), puis ajoutez-le à la liste dans le fichier json.
# Chaque mot dans le nom de l'article doit commencer par une lettre majuscule et parce que c'est la Saint-Valentin, le premier mot doit commencer par un « V » majuscule.
name = input(" Valentines Day item name: _\t")
isMeal = input(" If Valentines Day item name is a meal put (yes or no): _\t")
price = input(" Valentines Day item price: _\t")
# Si le nom contient des mots de connexion, ils doivent commencer en minuscules.
import re

def regEx():

    total_words = len(re.split("\s",name))
    x = re.findall(r"\A[V]", name)
    y= re.findall(r"\b[A-Z]",name)
    if not(x) and len(y)!=total_words:
        return False
# Le nom du repas doit contenir au moins deux "e" et aucun chiffre.

    w = re.findall("e",name)
    if isMeal.lower() != "yes" or len(w)<2:
        return False
    d = re.findall("[0-9]",name)
    if len(d)!=0:
        return False

# Le prix doit correspondre au modèle suivant : XX,14, où X sont des nombres.
    z = re.findall("[0-9][0-9],14$",price)
    if not(z):
        return False
    return True
# Créez un algorithme qui affiche un cœur composé d'étoiles (*), lorsque le menu est affiché.

def add_valentine_item(name, price,data):
    dict = {
        "name":name,
        "price":price
    }
    data["valentine_items"].append(dict)
    return data

print(regEx)
if  regEx():
    add_valentine_item(name, price,data)
    print(data)
    with open(file,"w") as f:
        json.dump(data,f,indent = 3,sort_keys = True)
    print("Sweat heart")
else:
    print("Your item don't follow the rules of a valentine's item")
    print("Exemple : :::::::::::::::::::::\nName: Vegetable Soup of Valentines-day\nPrice: 45,14")