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

# Exercice 7 : Vacances À Venir
#Fonction affichant la date du jour
def dateJour():
    import datetime
    print(datetime.datetime.now())
#Elle doit aussi afficher le temps restant jusqu'aux prochaines vacances à venir et impression de quelles vacances il s'agit
    vac = "25/12/2022"
    vac = datetime.datetime.strptime(vac, "%d/%m/%Y")
    rest = vac-datetime.datetime.now()
    rest1 = str(rest)
    print(f"il reste {rest.days} et {rest1[len(rest1)-14:len(rest1)-7]} heures pour la noël")

dateJour()

# Exercice 8 : Quel Âge As-Tu Sur Jupiter ?
#calcul de l'âfe que quelqu'un aurait sur jupiter en fonction de son âge donné en secondes
def age_sur_jupiter():
    ageS = 1000000000
    print(f"Vous avez sur terre : {ageS/31557600} ans.")
    print(f"Vous avez sur Mercure  : {ageS/(31557600 * 0.2408467)} ans.")
    print(f"Vous avez sur Vénus   : {ageS/(31557600 * 0.61519726)} ans.")
    print(f"Vous avez sur Mars    : {ageS/(31557600 * 1.8808158)} ans.")
    print(f"Vous avez sur Jupiter     : {ageS/(31557600 * 11.862615)} ans.")
    print(f"Vous avez sur Mars    : {ageS/(31557600 * 29.447498)} ans.")
    print(f"Vous avez sur Uranus    : {ageS/(31557600 * 84.016846)} ans.")
    print(f"Vous avez sur Neptune     : {ageS/(31557600 * 164.79132)} ans.")

age_sur_jupiter()


