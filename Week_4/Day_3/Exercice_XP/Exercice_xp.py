#Exercice 1 : Conversion de listes en dictionnaires
#Conversion de listes en dictionnaire avec la mathode zip()
#Copie des listes données par l'exercice
# keys = ['Ten', 'Twenty', 'Thirty']
# values = [10, 20, 30]
# print(dict(zip(keys,values)))


#Exercice 2 : Cinémaux
#Implémentation de la facturation des billets
from typing import KeysView
prix=0
famille=""
arret=0
compt1=0
compt2=0
compt_total=0
famille = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
# while famille != arret: 
    # famille = int(input("Donner votre âge à tour de rôle svp et taper 0 si vous avez fini==>"))
    # if famille != arret:   
for val,i in famille.items():
        if i < 3:
            print("Votre billet est gratuit")
        if i >3 and i <12:
            print("Le billet fait 10$")
            compt1 += 1
        if i > 12:
            print("Le billet fait 15$")
            compt2 += 1
compt_total= ((compt1*10) + (compt2*15))
print(f"Le prix total des billets de votre famille est {compt_total}$")

# #Avec l'objet suivant, déterminons le montant que doit payer chaque membre de la famille


