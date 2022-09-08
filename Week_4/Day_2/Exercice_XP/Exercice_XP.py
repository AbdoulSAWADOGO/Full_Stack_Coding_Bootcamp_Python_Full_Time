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
