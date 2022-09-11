#Demande de la date de naissance de l'utilisateur au format day/mois/année
Naissance=input("Quelle est votre date d'anniverssaire?\nDonner le jour/le mois/l'année:exemple:05/10/1999==>")
print(Naissance)
t=""
Naissance.split(',')
i=Naissance[-1]
annee=Naissance[6:10]
annee=int(annee)
print(annee)
if(annee%4==0 and annee%100!= 0 or annee%400==0):#Bonus
    for x in range(2):
        for i in range(0,int(i)):
            t +="i"
        print("    __",t,"__")
        print("   |:H:a:p:p:y:|")
        print(" __|___________|__")
        print("|^^^^^^^^^^^^^^^^^^|")
        print("| :B:i:r:t:h:d:a:y:|")
        print("|                  |")
        print("~~~~~~~~~~~~~~~~~~~~")
else:
    for i in range(0,int(i)):
        t +="i"
    print("    __",t,"__")
    print("   |:H:a:p:p:y:|")
    print(" __|___________|__")
    print("|^^^^^^^^^^^^^^^^^^|")
    print("| :B:i:r:t:h:d:a:y:|")
    print("|                  |")
    print("~~~~~~~~~~~~~~~~~~~~")












