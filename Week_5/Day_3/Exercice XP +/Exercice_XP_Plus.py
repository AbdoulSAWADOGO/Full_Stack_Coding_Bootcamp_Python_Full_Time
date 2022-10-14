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

