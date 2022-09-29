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
# def describe_city(ville_name,country_name="Israèl"):
#     print(f"{ville_name} is in {country_name}")
# describe_city("Ouagadougou","Burkina faso")
# #test du paramétrage du pays par défaut
# describe_city("Ouagadougou")
# #Exercice 3 terminé


#Exercice 4 : Aléatoire
#Création d'une fonction qui accepte un nombre entre 1 et 100 et génère un autre nombre aléatoirement entre 1 et 100.
import random
numb = 0
def Alea_number(numb):
    # numb=int(input("Svp entrer un nombre entre 1 à 100==>"))
    Alea = random.randint(1,100)
    if(Alea == numb):
        print("Félicitations, vous avez trouvé le secret")
    else : 
        print(f"Désolé! vous n'avez pas trouvé le bon nombre. Le bon nombre est {Alea} et pas {numb}")
while (numb < 1 or numb > 100):
    print("Vous devez entrer un nombre entre 1 et 100")
    numb=int(input("Svp entrer un nombre entre 1 à 100==>"))
Alea_number(numb)