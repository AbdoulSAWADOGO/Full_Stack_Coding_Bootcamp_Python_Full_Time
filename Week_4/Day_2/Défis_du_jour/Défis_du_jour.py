# #Défis 1
# #Demande d'un nombre et d'une taille à l'utilisateur
# liste=[]
# nombre=int(input("Svp entrer un nombre==>"))
# taille=int(input("Svp entrer la taille d'un tableau==>"))
# #Créons un programme qui imprime une liste de multiples de nombre jusqu'à ce que la longueur de la liste atteigne length.
# for i in range(1,taille+1):
#     liste.append(nombre*i)
# print(liste)

#Défis 2
#Demande d'une chaine à l'utilisateur
new_chaine=""
chaine=input("entrer une chaine de lettres Svp==>")
for i in chaine:
    if new_chaine == '' or i != new_chaine[len(new_chaine)-1]:
        new_chaine += i
print(new_chaine)



