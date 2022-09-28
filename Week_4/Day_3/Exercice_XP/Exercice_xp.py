#Exercice 1 : Conversion de listes en dictionnaires
#Conversion de listes en dictionnaire avec la mathode zip()
#Copie des listes données par l'exercice
# keys = ['Ten', 'Twenty', 'Thirty']
# values = [10, 20, 30]
# print(dict(zip(keys,values)))


# #Exercice 2 : Cinémaux
# #Implémentation de la facturation des billets
# from typing import KeysView
# prix=0
# famille=""
# arret=0
# compt1=0
# compt2=0
# compt_total=0
# famille = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
# # while famille != arret: 
#     # famille = int(input("Donner votre âge à tour de rôle svp et taper 0 si vous avez fini==>"))
#     # if famille != arret:   
# for val,i in famille.items():
#         if i < 3:
#             print("Votre billet est gratuit")
#         if i >3 and i <12:
#             print("Le billet fait 10$")
#             compt1 += 1
#         if i > 12:
#             print("Le billet fait 15$")
#             compt2 += 1
# compt_total= ((compt1*10) + (compt2*15))
# print(f"Le prix total des billets de votre famille est {compt_total}$")

# #Avec l'objet suivant, déterminons le montant que doit payer chaque membre de la famille
# #Exercice 2 terminé

#Exercice 3 : Zara
#Création d'undictionnaire appelé brand dont la valeur correspond aux informations de la première partie
brand = {
    "name": 'Zara',
    "creation_date": 1975,
    "creator_name": ['Amancio', 'Ortega', 'Gaona'],
    "type_of_clothes": ['men', 'women', 'children', 'home'],
    "international_competitors": ['Gap', 'H&M', 'Benetton'],
    "number_stores": 7000,
    "major_color": 
    {
        "France": 'blue',
        "Spain": 'red',
        "US": ['pink', 'green']
    }
}

#Modification du nombre de magasins à 2
brand["number_stores"] = 2
#impression d'une phrase expliquant les clients de Zara
print("Les clients de Zara sont==>", brand["type_of_clothes"])
#Ajout d'une clé appelée country_creation avec une valeur de Spain
brand["country_creation"] = "Spain"
#Vérification de l'existance de la clé international_competitors dans le dictionnaire et si c'est le cas, ajout dans le magasin Desigua
if brand["international_competitors"] :
    brand["international_competitors"].append("Desigual")
#suppression des informations sur la date de création
del brand["creation_date"]
#Impression du dernier concurrent international.
print(brand["international_competitors"][-1])
#impression des principales couleurs de vêtements aux États-Unis.
print(brand["major_color"]["US"])
#Impression du nombre de paires clé-valeur (c'est-à-dire la longueur du dictionnaire).
print(len(brand.keys()))
#Impression des clés du dictionnaire.
print(brand.keys())
#. Création d'un autre dictionnaire appelé more_on_zaraavec les détails suivants :
more_on_zara = {
    "creation_date": 1975,
    "number_stores": 10000
}
# Utilisation d'une méthode pour ajouter les informations du dictionnaire more_on_zaraau dictionnaire brand

brand.update(more_on_zara)
# Impression de la valeur de la clé number_stores. 
# Qu'est-ce qui vient juste de se passer ?
#on affiche 10.000. Ce qui veut dire que une mise à jour a été faite sur la variable
#Exercice 3 terminé