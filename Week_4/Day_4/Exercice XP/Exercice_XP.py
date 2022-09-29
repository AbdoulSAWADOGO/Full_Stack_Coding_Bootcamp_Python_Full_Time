# #Exercice 1 
# #Ecriture d'une fonction appelée display_message() qui imprime une phrase indiquant à tout le monde ce que nous apprenons ici dans ce cours
# def display_message():
#     print("Nous apprenons dans ce cours les fonctions. Nous abordons principalement la création, modification, suppression de fonctions et aussi la différence entre fonctions et methodes")
# display_message()  
# #Exercice 1 terminé 

#Exercice 2 : Le livre préféré
#Écriture d'une fonction appelée favorite_book()qui accepte un paramètre appelé title.
# def favorite_book(title):
#     print(f"One of my favorite books is ==>{title}")
# title = input("Quelle est votre livre préféré ?")
# favorite_book(title)
# #Exercice 2 terminé

#Exercice 3 Un peu de Géographie
#Écriture d'une fonction appelée describe_city()qui accepte le nom d'une ville et son pays comme paramètres.
def describe_city(ville_name,country_name="Israèl"):
    print(f"{ville_name} is in {country_name}")
describe_city("Ouagadougou","Burkina faso")
describe_city("Ouagadougou")