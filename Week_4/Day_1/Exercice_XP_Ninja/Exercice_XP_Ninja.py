#Exercice 1 : Utiliser Le Terminal
#Exécution de la commande python réalisé
#C'est le PATH qui permet d'appeler la commande python car il récupère automatiquement le repertoire dans lequel il est logué


#Exercice 2 : Alias
#Exercice 2 réalisé avec succès. py ouvre aussi la console python


#Exercice 3 : Sorties prédictions
from re import A


3 <= 3 < 9  #True
3 == 3 == 3     #True
bool(0)     #False
bool(5 == "5")      #False
bool(4 == 4) == bool("4" == "4")    #True
bool(bool(None))    #False
x = (1 == True)
y = (1 == False)
a = True + 4
b = False + 10
print("x is", x)    #x is True
print("y is", y)    #y is False
print("a:", a)      #5
print("b:", b)      #10


#Exercice 4 : Combien De Caractères Dans Une Phrase ?
my_text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
taille=len(my_text) 
print(taille)

#Exercice 5 : Mot Le Plus Long Sans Caractère Spécifique
chaine=input("entrer une phrase svp==>")
chaine1=chaine
while('i' in chaine):
    chaine=input("entrer à nouveau une phrase svp==>")
if (len(chaine) > len(chaine1)):
    print("Toutes mes félicitations ")


    


    
