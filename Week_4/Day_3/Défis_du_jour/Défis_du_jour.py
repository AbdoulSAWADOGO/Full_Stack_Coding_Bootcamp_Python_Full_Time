#defis 1 :
#Demande d'un mot à l'utilisateur
chaine = input("Svp veillez entrer un mot==>")
#Écrivons un programme qui crée un dictionnaire. Ce dictionnaire stocke les index de chaque lettre dans une liste.
#Assurez-vous que les lettres sont les clés.
#Assurez-vous que les lettres sont des chaînes.
#Assurez-vous que les index sont stockés dans une liste et que ces listes sont des valeurs.
#Vérification que les letttres sont des chaines
import re
pattern = re.compile(r"(^[a-zA-Z]+$)+")
cond = pattern.fullmatch(chaine)
if cond ==None:
    print("retapper un mot svp")
else :

    liste = {}
    fin=len(chaine)
    for i in range(0,fin) :
            if chaine[i] in liste :
                liste[chaine[i]].append(i)
            else :
                liste[chaine[i]] = [i]
    print(liste)




