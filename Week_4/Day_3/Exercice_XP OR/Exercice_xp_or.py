#Création de la variable birthdays et sa valeur doit être un dictionnaire
#Initialisation de la variable avec des anniversaires
birthday={'armin':'1960/12/24',
           'mikassa':'2009/02/05',
           'reiner':'1994/03/29',
           'eren':'2003/07/16',
           'zecke':'2001/06/2001'}
           #impression message de bienvenue
print("Welcome, you can see the birthdays of the people in the list below")
print(birthday)
t=0
yname=input("Enter un name:")
for cle in birthday.keys():
    if yname==cle:
        t=1
        print("The birthday of ",cle)
        print(birthday[yname])
if t==0:
	print("This name is not in our dictionary")