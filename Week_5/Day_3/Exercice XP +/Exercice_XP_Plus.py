# Exercice 1 : Importer
from func import addition
print(addition(15,9))


#Exercice 2 : Module Aléatoire
#Création d'une fonction acceptant un nombre entre 1 et 100 puis le lancement d'un nombre aléatoire entre 1 et 100
def alea (num1) :
    import random as r
    if num1 in range(0,101):
        if num1 == r.randint(0,100):
            print("Super")
alea(9)



# Exercice 3 : Module Cordes
#Génération d'une chaine aléatoire de longueur 5
import random as r
import string

chaine = "".join([r.choice(string.ascii_letters) for i in range(0,5)])

print(chaine)

# Exercice 4 : Date Actuelle
#Création d'une fonction qui affiche la date actuelle
def actu():
    from datetime import datetime, time
    print(datetime.now())

#Exercice 5 : Temps Restant Jusqu'au 1er Janvier
#Création d'une fonction qui affiche le temps restant jusqu'au 1er janvier.
def timeRest():
    import datetime
    janv = "01/01/2023"
    janv = datetime.datetime.strptime(janv, "%d/%m/%Y")
    rest = janv-datetime.datetime.now()
    rest1= str(rest)
    print(f"il reste {rest.days} et {rest1[len(rest1)-14:len(rest1)-7]} heures")

timeRest()

# Exercice 6 : Anniversaire Et Minutes
#Créez une fonction qui accepte une date de naissance comme argument (dans le format de votre choix), puis affiche un message indiquant combien de minutes l'utilisateur a vécu dans sa vie.
def vie():
    import datetime
    anniv = input("Entrez votre date d'anniversaire en respectant le format DD/MM/YYYY : ")
    anniv = datetime.datetime.strptime(anniv, "%d/%m/%Y")
    minute = datetime.datetime.now() - anniv
    print(f"Vous avez vécu pendant {int(minute.total_seconds()/60)} minutes.")

vie()


