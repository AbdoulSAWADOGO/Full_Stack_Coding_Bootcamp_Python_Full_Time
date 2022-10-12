Chaine = input("Svp, entrer un ensemble de mots séparé par des virgules. Exemple:||without,hello,bag,world||==>")
Chaine = Chaine.split(',')
Chaine = sorted(Chaine)
New_Chaine = ""
for mot in Chaine:
    New_Chaine += mot + ','
print(New_Chaine)
