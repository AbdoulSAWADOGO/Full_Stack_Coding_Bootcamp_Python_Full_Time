# #Exercice 1 : Formule
# #Récupération d'une valeur avec l'utilisateur
# import math
# C = 50
# H = 30
# result=[]
# valeur = input("entrer une chaine de valeurs séparées par des virgules svp==>")
# valeur = valeur.split(',')
# for D in valeur:
#     result.append(str(int((math.sqrt(2*C*int(D)/H)))))
# print(','.join(result))


# #Exercice 2 : liste d'entiers
# #Récupération et stockage de 10 nombres dans un tableau
# somme=0
# min_max=[]
# sup=0
# inf=[]
# carre=[]
# toto=0
# compt=0
# val=0
# tata=[]
# valeur = input("entrer 10 nombres et séparer les par des virgules svp==>")
# valeur = valeur.split(',')
# #Affichage de la liste sur une ligne
# print(','.join(valeur))
# #TRi et affichage des nombres par ordre décroissant
# valeur.sort(reverse = True)
# print(valeur)
# #La somme de tous les nombres et affichage
# for i in valeur:
#     somme += int(i)
# print(somme)
# #Une liste contenant le premier et le dernier nombre
# min_max.append(min(valeur))
# min_max.append(max(valeur))
# print(min_max)
# #Une liste de tous les nombres supérieurs à 50
# for i in valeur:
#     if int(i) > 50:
#         sup = sup + int(i)
# print(sup)
# #Une liste de tous les nombres inférieus à 10
# for j in valeur:
#     if int(j) < 10:
#         inf.append(j)
# print(inf)
# #Une liste de tous les nombres au carré
# for x in valeur:
#     toto=int(x)**2
#     carre.append(toto)
# print(carre)

# #Impression des numéros sans doublons
# for y in valeur:
#     if y in valeur:
#         val += 1
#         if val == 1:
#             tata.append(y)
#             compt +=1
# print(tata)
# print("le nombre de numéros dans la nouvelle liste==>", compt)
# #La moyenne de tous les nombres
# moyenne= (somme/(len(valeur)))
# print("la moyenne de la liste donne==>",moyenne)
# print("le plus grand nombre est",max(valeur))
# print("le plus petit nombre est",min(valeur))

#Exercice 3 : Travail sur un paragraphe
#Recherche d'un texte intéressant en ligne parlant du contexte social er de DI
#récupération de ce texte dans une variable
paragraphe="Developers Institute est le partenaire officiel de formation de l'Autorité israélienne de l'innovation pour le développement Web dans l'industrie technologique. D'après Switchup, Developers Institute se positionne à la 31è position mondiale, dans le classement des meilleures Startups de l'année 2021!"
paragraphe=paragraphe.split(' ')
print(paragraphe)
#Analyse du paragraphe et affichage de nombre de caractères
carac=len(paragraphe)
print("Le nombre de caractères du texte est:",carac)
#Recherche et affichage du nombre de phrase dans le paragraphe
phrase=(str(carac).split(','))
print(phrase)
#Recherche et affichage du nombre de mots dans le paragraphe
result=(str(carac).split(' '))
print(result)








