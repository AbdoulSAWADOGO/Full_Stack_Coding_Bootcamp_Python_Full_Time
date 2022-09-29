#defis 1 :
# #Demande d'un mot à l'utilisateur
# chaine = input("Svp veillez entrer un mot==>")
# #Écrivons un programme qui crée un dictionnaire. Ce dictionnaire stocke les index de chaque lettre dans une liste.
# #Assurez-vous que les lettres sont les clés.
# #Assurez-vous que les lettres sont des chaînes.
# #Assurez-vous que les index sont stockés dans une liste et que ces listes sont des valeurs.
# #Vérification que les letttres sont des chaines
# import re
# pattern = re.compile(r"(^[a-zA-Z]+$)+")
# cond = pattern.fullmatch(chaine)
# if cond ==None:
#     print("retapper un mot svp")
# else :

#     liste = {}
#     fin=len(chaine)
#     for i in range(0,fin) :
#             if chaine[i] in liste :
#                 liste[chaine[i]].append(i)
#             else :
#                 liste[chaine[i]]=[i]
#     print(liste)

#Défis 2 
#Création d'un programme qui imprime une liste des articles que vous pouvez acheter dans le magasin avec l'argent que vous avez dans votre portefeuille.
items_purchase = {
  "Apple": "$4",
  "Honey": "$3",
  "Fan": "$14",
  "Bananas": "$4",
  "Pan": "$100",
  "Spoon": "$2"
}

wallet = "$100" 
#trie de la liste par ordre alphabétique
trie= items_purchase
print(trie)
achat =[]
for i in trie:
    if(int(trie[i][1:]) <= int(wallet[1:])):
        achat.append(i)
if achat == []:
    print("Nothing")
else : 
    print(achat)
#Défis terminé


