#Demande d'un chaîne à l'utilisateur
from typing import runtime_checkable


chaine = input("Veillez entrer une chaine svp==>")
if (len(chaine)<10):
    print("Votre chaîne n'est pas assez longue")
if (len(chaine)>10):
    print("Votre chaine est trop longue")
#Affichage du premier caractère de la chaine
print(f"le premier caractère de votre chaine est {chaine[0]}")
#Affichage du dernier caractère de la chaine
print(f"le dernier caractère de votre chaine est {chaine[len(chaine)-1]}")
#Autre methode intéressante
print(f"le dernier caractère de votre chaine est {chaine[-1]}")
chaine1=""
for i in chaine:
    chaine1 +=i
    print(chaine1)
