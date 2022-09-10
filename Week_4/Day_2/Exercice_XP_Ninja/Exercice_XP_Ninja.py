#Exercice 1 : Formule
#Récupération d'une valeur avec l'utilisateur
import math
C = 50
H = 30
result=[]
valeur = input("entrer une chaine de valeurs séparées par des virgules svp==>")
valeur = valeur.split(',')
for D in valeur:
    result.append(str(int((math.sqrt(2*C*int(D)/H)))))
print(','.join(result))

