# #Exercice 1 : Concaténer des listes
# #Code de concaténation de deux listes sans utiliser le signe +
# from operator import indexOf


# liste1 = [1,2,3,4,5]
# liste2 = [6,7,8,9,10]
# liste1.extend(liste2)
# print(liste1)

# #Exercice 2 : Plage de nombres
# #Création d'une boucle qui va de 1500 à 2500 et imprime tous les multiples de 5 et 7.
# for i in range(1500,2501):
#     if i%5==0 or i%7==0:
#         print(i)

# #Exercice 3 : Vérification de l'index
# #Utilisation de la liste donnée par l'exercice
# from operator import index


# names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']
# Nom_utilisateur=input("Donner nous votre nom svp==>")
# for i,nom in enumerate(names):
#     if nom == Nom_utilisateur:
#         print(nom , "a pour index:" ,i)
#         break

# #Exercice 4 :Le plus grand nombre
# #Demande de 3 nombres avec l'utilisateur
# liste=[]
# toto=0
# for i in range(0,3):
#     Nombre=input("Svp entrer un nombre==>")
#     liste.append(Nombre)
# # print(liste)
# for x in liste:
#     if int(x) > int(toto):
#         toto=x
# print(toto)


# #Exercice 5 : L'alphabet
# #Création d'une chaine avec les lettres de l'alphabet
# # for i in range('a','z'):
# #     print(i)
# import string
# alphabet = string.ascii_lowercase
# list = list(alphabet)
# print(list)
# voyeles=['a','e','o','i','u','y']
# for i in list:
#         if i in voyeles:
#             print("la lettre", i , "est une voyelle")
#         else:
#             print("la lettre", i , "est une consonne")


#Exercice 6 : Mots et lettres
#Récupération 7 mots avec l'utilisateur
words=input("Svp entrer 7 mots et séparer les par des espaces==>")
words=words.split(' ')
print(words)
letter=input("entrer un seul caractère==>")
for i in words:
    if letter in i:
        print("Votre lettre se trouve à l'index",i.index(letter),"du mot",i)
    
