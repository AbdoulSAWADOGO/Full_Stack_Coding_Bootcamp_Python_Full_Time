#Defis du jour : Résolution de la matrice
Matrix = [
    ["7","i","3"],
    ["T","s","i"],
    ["h","%","x"],
    ["i"," ", "#"],
    ["s","M"," "],
    ["$","a"," "],
    ["#","t","%"],
    ["^","r","!"]
]

def read(liste,index,*args):
    return liste[index]
code=[]
top = 0
while top < (len(Matrix[0])):
    for line in Matrix :
        char = read(line,top)
        if char.isalpha():
            code.append(char)
        else:
            code.append(" ")

    top +=1
print("".join(code))
#Défis terminé avec succès
