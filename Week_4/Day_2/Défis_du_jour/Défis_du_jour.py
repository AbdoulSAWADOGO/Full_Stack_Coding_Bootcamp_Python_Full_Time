#Défis 1
#Demande d'un nombre et d'une taille à l'utilisateur
liste=[]
nombre=int(input("Svp entrer un nombre==>"))
taille=int(input("Svp entrer la taille d'un tableau==>"))
#Créons un programme qui imprime une liste de multiples de nombre jusqu'à ce que la longueur de la liste atteigne length.
for i in range(1,taille+1):
    liste.append(nombre*i)
print(liste)




