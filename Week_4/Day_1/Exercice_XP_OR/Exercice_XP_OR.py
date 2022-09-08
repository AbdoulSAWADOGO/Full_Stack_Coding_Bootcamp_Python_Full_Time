#Exercice 1 : Hello world-j’aime python
print("Hello world\n"*4,"I love python\n"*4)

#Exercice 2 : Quelle est la saison
Mois=int(input("entrer un mois de l’année==>"))
#afficher la saison du mois
if (Mois>=3 and Mois<=5) :
	print(" printemps")
elif (Mois <=6 and Mois >=8) :
	print("été")
elif (Mois <=9 and Mois >=11) :
	print(" automne ")
elif (Mois>=12 or Mois ==1 or Mois==2) :
	print("hiver")

