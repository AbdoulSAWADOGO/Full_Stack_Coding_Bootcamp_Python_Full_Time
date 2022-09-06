#Exercice 1 : Hello world
#Imprimer le sortie suivante dans une ligne de code
print(" Hello world \n"*4)

#Exercice 2 : calcul
calcul = int((99**3)*8)
print(calcul)

#Exercice 3 :Prédiction
5<3 	#False
3==3	#True
3== "3"	#false
#"3" > 3	#peut pas comparer une chaine et un entier
"Hello" == "hello"	#false

#Exercice 4 :Marque d’ordinateurs
Computer_brand= "Lenovo"
print("I have a {} computer".format(Computer_brand))

#Exercice 5: my informations
Nom = "Abdoul"
Age = 23
Shoe_size = 41
info=("My name is {} and i have {} years old. Je chausse du {}.".format(Nom,Age,Shoe_size))
print(info)


#Exercice 6 : A & B
A=100
B=65
if A >B :
	print(" Hello world ")

#Exercice 7 :Parité
Nombre=int(input("entrer un nombre==>"))
if Nombre % 2 == 0 :
	print(" le nombre est pair ")
else :
	print(" le nombre est impair ")

#Exercice 8 :Quel est ton nom
My_name= "Abdoul"
Your_name=input (" quel est ton nom ==>")
if My_name == Your_name :
	print("nous avons donc le même nom")
else :
	print (" Oups! nous n’avons pas le même nom ")

#Exercice 9 :Assez grand pour faire des montagnes
Taille=int(input("quelle est votre taille en cm. Exemple :175 "))
if (Taille >145) :	
	print(" vous êtes assez grand pour rouler ")
else :
	print(" vous devez grandir un peu plus pour rouler ")













