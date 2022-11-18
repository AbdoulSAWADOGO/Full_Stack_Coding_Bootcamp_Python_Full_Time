#Exercice 1
#Création de la variable birthdays et sa valeur doit être un dictionnaire
#Initialisation de la variable avec des anniversaires
birthday={'Abdoul':'1960/12/24',
           'Steve':'2009/02/05',
           'Rachid':'1994/03/29',
           'Kader':'2003/07/16',
           'Toto':'2001/06/2001'}
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


#Exercice 2
birthday={'Abdoul':'1960/12/24',
           'Steve':'2009/02/05',
           'Rachid':'1994/03/29',
           'Kader':'2003/07/16',
           'Toto':'2001/06/2001'}
           #Impression de tous les noms
print("Tous les noms ==>",birthdays)
t=0
#demande du nom de la personne
name=input("entre votre nom ==>")
for cle in birthdays.keys():
    if name==cle:
        t=1
        print("The birthday of ",cle)
        print(birthdays[name])
if t==0:
	#Si la personne n'est pas dans le dictionnaire impression d'un message
 print("Désolé! nous ne connaissons pas votre date d'anniversaire",name)

#Exercice 3
birthday={'Abdoul':'1960/12/24',
           'Steve':'2009/02/05',
           'Rachid':'1994/03/29',
           'Kader':'2003/07/16',
           'Toto':'2001/06/2001'}
name=input("entrer votre nom ==>")
birth=input("entrer votre date d'anniversaire yyyy/mm/dd ==>")
t=0
#Ajout de nouvelles données dans le dictionnaire
for cle in birthdays.keys():
    if name==cle:
        print(f"{name} is found and The corresponding birthday is found:",birthdays[name])
        t=1
        break
if t==0:
	print(f"we add {name} to the list with birthday date {birth}")
	birthdays[name]=birth
	print(birthdays)