#Exercice 1 : Set
#Création de l'ensemble my_fav_numbers et affichage
my_fav_numbers = {'3','9','15','1','12','9','17','9','21'}
print(my_fav_numbers)
#Ajout de deux nouveaux numéros à l'ensemble
my_fav_numbers.add('78')
my_fav_numbers.add('100')
print(my_fav_numbers)
#suppression du dernier numéro
my_fav_numbers=list(my_fav_numbers)
#Conversion de l'ensemble en liste
my_fav_numbers.pop(-1)
#suppression et affichage
print(my_fav_numbers)
#reconversion en un ensemble
my_fav_numbers=set(my_fav_numbers)
#Création de l'ensemble friend_fav_numbers avec les nombres de mon ami
friend_fav_numbers = {'19','4','45','78','9'}
#Concaténation des deux ensembles
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
set(our_fav_numbers)
print("la concaténation donne ==> ", our_fav_numbers)

#Exercice 2 : Tuple
#C'est pas possible d'ajouter d'autres entiers au tuble car ça serait une modification de ce dernier. Rappelons nous que nous ne pouvons pas modifier le contenu d'un tuple

#Exercice 3 : List
#Utilisation de la liste offerte par l'exercice
basket = ["Banana","Apples","Oranges","Blueberries"]
print(basket)
#suppression de Banana de la liste  et affichage
basket.pop(0)
print(basket)
#Suppression de Myetilles de la liste
#Impossible de supprimer un élément qui n'existe pas. Nous ne pouvons pas l'atteindre

#Ajout de Kiwi à la fin de la liste et affichage
basket.append('Kiwi')
print(basket)

#Ajout de pomme au début de la liste
basket.insert(0,'Pommes')
print(basket)

#compter le nombre de pommes dans le panier et affichage
nbr=basket.count('Pommes')
print(nbr)

#Vider le panier et affichage
basket.clear()
print(basket)
#Impression du panier
print(basket)


#Exercice 4 : Flotteurs
#La différrence est que les entiers sont sans virgule tandis que les réels sont des valeurs décimales
#J'ai réfléchi en faisant des tests sur ma console mais je ne trouve pas  une autre manière de générer des floats
#Création de la liste demandée sur l'exercice
floats = ['1.5','2','2.5','3','3.5','4','4.5','5']
print(floats)

#Exercice 5 : Boucle For
#Utilisation de la boucle for pour imprimer les nombre de 1 à 20
for i in range(1,21):
    print(i)
#En utilisant toujours la boucle, impression des éléments  pairs
for i in range(0,20,2):
    print(i)

#Exercice 6 : Réalisation d'une boucle while pour récuperer un nom
Ton_nom = input("entrer un nom svp==>")
Mon_nom = "Abdoul"
while Ton_nom != Mon_nom:
    Ton_nom=input("Svp changer de nom ==>")
print("Félicitations! Ce nom est le mien.")
    

























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
