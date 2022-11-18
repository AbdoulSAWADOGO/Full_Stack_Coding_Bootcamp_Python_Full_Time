Importation de reverse et de convert
from audioop import reverse
from lib2to3.pytree import convert

#Copie de la chaine donnée par l'exercice
chaine="Volkswagen, Toyota, Ford Motor, Honda, Chevrolet    "
#Conversion en une liste
liste=chaine.split(',')
print(liste)
# Impression des messages
print("There are {} manufactures/companies in the liste".format(len(liste)))
print("The list of manufactures in reverse")
rev=list(reversed(liste))
print(sorted(rev))
cpt=0
n=0
#Utilisation des boucles de compréhension de liste dans les ordres inverse et descendant
for i in range(5):
    if 'o' in liste[i]:
        cpt+=1
print(cpt,"manufacture's names have the letter 'o")
for i in range(5):
    if 'i' not in liste[i]:
        n+=1
print(n,"manufacture's names do not have the letter i")
liste=["Honda","Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]
conver=set(liste)
newList=list(conver)
taille=len(conver)
print("Set list:",conver)
print("Il ya ",taille,"element dans la liste:",newList)