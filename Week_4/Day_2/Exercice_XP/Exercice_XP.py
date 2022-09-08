# #Exercice 1 : Set
# #Création de l'ensemble my_fav_numbers et affichage
# from ntpath import join


# my_fav_numbers = {'3','9','15','1','12','9','17','9','21'}
# print(my_fav_numbers)
# #Ajout de deux nouveaux numéros à l'ensemble
# my_fav_numbers.add('78')
# my_fav_numbers.add('100')
# print(my_fav_numbers)
# #suppression du dernier numéro
# my_fav_numbers=list(my_fav_numbers)
# #Conversion de l'ensemble en liste
# my_fav_numbers.pop(-1)
# #suppression et affichage
# print(my_fav_numbers)
# #reconversion en un ensemble
# my_fav_numbers=set(my_fav_numbers)
# #Création de l'ensemble friend_fav_numbers avec les nombres de mon ami
# friend_fav_numbers = {'19','4','45','78','9'}
# #Concaténation des deux ensembles
# our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
# set(our_fav_numbers)
# print("la concaténation donne ==> ", our_fav_numbers)

# #Exercice 2 : Tuple
# #C'est pas possible d'ajouter d'autres entiers au tuble car ça serait une modification de ce dernier. Rappelons nous que nous ne pouvons pas modifier le contenu d'un tuple

# #Exercice 3 : List
# #Utilisation de la liste offerte par l'exercice
# basket = ["Banana","Apples","Oranges","Blueberries"]
# print(basket)
# #suppression de Banana de la liste  et affichage
# basket.pop(0)
# print(basket)
# #Suppression de Myetilles de la liste
# #Impossible de supprimer un élément qui n'existe pas. Nous ne pouvons pas l'atteindre

# #Ajout de Kiwi à la fin de la liste et affichage
# basket.append('Kiwi')
# print(basket)

# #Ajout de pomme au début de la liste
# basket.insert(0,'Pommes')
# print(basket)

# #compter le nombre de pommes dans le panier et affichage
# nbr=basket.count('Pommes')
# print(nbr)

# #Vider le panier et affichage
# basket.clear()
# print(basket)
# #Impression du panier
# print(basket)


# #Exercice 4 : Flotteurs
# #La différrence est que les entiers sont sans virgule tandis que les réels sont des valeurs décimales
# #J'ai réfléchi en faisant des tests sur ma console mais je ne trouve pas  une autre manière de générer des floats
# #Création de la liste demandée sur l'exercice mais pas coder en dur ['1.5','2','2.5','3','3.5','4','4.5','5']
# floats= []
# for i in range(3,11):
#     floats.append(i/2)
# print(floats)

# #Exercice 5 : Boucle For
# #Utilisation de la boucle for pour imprimer les nombre de 1 à 20
# for i in range(1,21):
#     print(i)
# #En utilisant toujours la boucle, impression des éléments  pairs
# for i in range(0,20,2):
#     print(i)

# #Exercice 6 : Réalisation d'une boucle while pour récuperer un nom
# Ton_nom = input("entrer un nom svp==>")
# Mon_nom = "Abdoul"
# while Ton_nom != Mon_nom:
#     Ton_nom=input("Svp changer de nom ==>")
# print("Félicitations! Ce nom est le mien.")
    

# #Exercice 7 : Fruits Préférés
# #Demande du fruit préféré de l'utilisateur
# Fruits=input("Svp, quel est votre fruit ou vos fruits préférés? Si vous preferez beaucoup de fruits, separez les par des espaces ' '.Exemple:apple mango cherry==>")
# print(Fruits)
# #conversion en une liste
# # Fruits=list(Fruits)
# Fruits=Fruits.split(' ')
# print(Fruits)
# #Comparaison et vérification
# fruit=input("Donner nous le nom d'un fruit svp==>")
# test=0
# for fruit1 in Fruits:
#     if fruit1==fruit:
#         test = test + 1
# if test>=1:
#     print("Vous avez choisi un de vos fruits préférés! prennez paisir!")
# else:
#     print("Vous avez choisi un nouveau fruit. J'espère que vous l'appréciez")

# #Exercice 8 : ommande de Pizza
# #boucle de series de garnitures
# arret="quitter"
# tout=' '
# prix=10 
# Pizza = ''
# while Pizza != arret: 
#     Pizza = input("entrer une garniture de pizza. taper'quitter' pour stopper==>")
#     if Pizza != arret:
#         print(f"Vous venez d'ajouter la garniture suivante: {Pizza} à votre pizza")
#         tout += Pizza
#         prix += 2.5
# print(f"Toutes les garnitures que vous avez ajouté sont: {tout} ")
# print(f"le prix total de la pizza est: {prix}")


#Exercice 9 : Cinémax
#calcul des prix de billets de cinéma d'une famille
# prix=0
# famille=""
# arret=0
# compt1=0
# compt2=0
# compt_total=0
# while famille != arret: 
#     famille = int(input("Donner votre âge à tour de rôle svp et taper 0 si vous avez fini==>"))
#     if famille != arret:   
#         if famille < 3:
#             print("Votre billet est gratuit")
#         if famille >3 and famille <12:
#             print("Le billet fait 10$")
#             compt1 += 1
#         if famille > 10:
#             print("Le billet fait 15$")
#             compt2 += 1
# compt_total= ((compt1*10) + (compt2*15))
# print(f"Le prix total des billets de votre famille est {compt_total}$")

# #Film réservé aux personnes agées. Vérifions cela

# from operator import index, indexOf


# Vos_nom = input("entrer vos noms séparés par des espaces svp==>")
# Vos_nom = Vos_nom.split(' ')
# print(Vos_nom)
# Ton_nom = ""
# Ton_age=0
# for i in Vos_nom:
#         Ton_age=int(input("quel est ton âge? ==>"))
#         print(i)
#         if Ton_age >=16 and Ton_age<=21:
#             print("tu peux regarder ton film")
#         else:
#             Vos_nom.remove(i)
# print(Vos_nom)


#Exercice 10
#Utilisation de la liste donnée par l'exercice
sandwich_orders = ["Tuna sandwich", "Avocado sandwich", "Egg sandwich", "Sabih sandwich", "Pastrami sandwich"]
#réation d'une liste vide
finished_sandwiches=[]
#Déplacement des sandwich quand c'est préparé
print("la liste initiale ",sandwich_orders)
while sandwich_orders != [] :
    etat_sandwich=input("quel est l'etat du sandwich? taper 1 pour valider et une lettre pour quitter==>")
    if int(etat_sandwich):
        finished_sandwiches.append(sandwich_orders[0])
        sandwich_orders.remove(sandwich_orders[0])
        # res = finished_sandwiches.insert(0, sandwich_orders.pop(sandwich_orders.index(sandwich)))
        # print("la liste des sandwichs prêts",finished_sandwiches)
        # print("la liste des sandwichs pas prêts",sandwich_orders)
else:
    for i in finished_sandwiches:
         print("I made your ", i)






























#Test sur les dictionnaires
# shirt= {
#     'name': 'Awesome T-shirt 3000',
#     'size': 'S',
#     'price': 20
# }
# for i in shirt:
#     print(i,shirt[i])

# list1 = [1,2,3]
# list2 = ['a','b','c']
# list3 = [1.1, 2.2, 3.3, 4.4, 5.5]

# for item in enumerate(list1, list2, ): # only go as far it is possible
#     print(item)
