//Exercice 1 Chats
//Utilisation de la classe donnée par l'exercice
class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

//Instanciation de 03 cats à l'aide du code fourni ci-dessus
chat1 =Cat("miauh",6)
chat2 =Cat("brewh",4)
chat3 =Cat("ratis",2)
//En dehors de la classe, trouvons une fonction quit trouve le chat le plus ancien et rencoie le chat
def ancien_chat(chat1,chat2,chat3):
	if(chat1.age>chat2.age and cha1.age>chat3.age):
		print(f"le nom du chat est==> {cha1.name} , et il a {chat1.age}  ans. ")
	elif(chat2.age>cha1.age and chat2.age>chat3.age):
		print(f"le nom du chat est==>  {chat2.name} ,et il a {chat2.age}  ans. ")
	elif(chat3.age>chat2.age and chat3.age>cat1.age):
		print(f"le nom du chat est==>  {chat3.name} , et il a {chat3.age}  ans. ")
	else:
		print("Aucun chat")
//Impression de la chaine du chien le plus agé
ancien_chat(chat1,chat2,cha3)
//Exercice 1 terminé

//Exercice 2 : Chiens
//Création d'une classe appelée dog
class Dog:
//Dans cette classe, créons une __init__méthode qui prend deux paramètres : nameet height. Cette fonction instancie deux attributs, dont les valeurs sont les paramètres.
	def __init__(self,nom,poids):
		self.nom = nom
		self.poids = poids
//Créons une méthode appelée barkqui imprime la chaîne suivante " <dog_name>va woof!"
	def bark(self) :
		print(f"{self.nom} va woof!")
//Mise en pratique
	def jump(self) :
		print(f"{self.nom} saute {self.poids*2} cm")
//le chien de David
chien_david=Dog('Rex',50)
print(f'le chien de David s appelle {chien_david.nom} et son poids est {davids_dog.poids}')
chien_david.bark()
chien_david.jump()

//le chien de Sarah
chien_sarah=Dog('Teacup',20)
print(f'le chien de David s appelle {chien_sarah.nom} et son poids est {sarahs_dog.poids}')
chien_sarah.bark()
chien_sarah.jump()

//Instruction de comparaison des chiens
if chien_sarah.height > chien_david.height:
	print(f"{chien_sarah.nom} est le plus grand ")
else:
	print(f"{chien_david.nom} est le plus grand ")

//Exercice 2 terminé

//Exercice 3 Qui est le producteur de la chanson
//Définition d'une classe appelée Song
class Song:
	def __init__(self,lyrics):
		self.lyrics=lyrics
//La methode sing_me_a_song et impression
	def sing_me_a_song(self):
		for i in self.lyrics:
			print(i)	
//création d'un objert , copie de l'objet exemple donné clairement				
toto_objet= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])
toto_objet.sing_me_a_song()
//Exercice 3 terminé

//Exercice 4 : Après-midi au zoo
//Création d'une claase appelée Zoo, etc
class Zoo:
	def __init__(self,nom):
		self.animals=[]
		self.nom=nom
//Créons une méthode appelée add_animalqui prend un paramètre new_animal. Cette méthode ajoute le new_animalà la animalsliste tant qu'il n'est pas déjà dans la liste.
	def add_animal(self,new_animal):
		if new_animal not in self.animals:
			self.animals.append(new_animal)
		else:
			print(f"{new_animal} est dans la liste")
//Créons une méthode appelée get_animalsqui imprime tous les animaux du zoo.
	def get_animals(self):
		print('Les animaux du Zoo : ')
		for i in self.animals:
			print(i,end=' ')
//Créons une méthode appelée sell_animalqui prend un paramètre animal_sold. Cette méthode supprime l'animal de la liste et bien sûr l'animal doit exister dans la liste.
def sell_animal(self,animal_sold):
		if animal_sold in self.animals:
			self.animals.remove(animal_sold)
		print('Les animaux du Zoo : ')
			for i in self.animals:
				print(i,end=' ')

//Créez une méthode appelée sort_animalsqui trie les animaux par ordre alphabétique et les regroupe en fonction de leur première lettre.
def sort_animals(self):
		sort=sorted(self.animals)
		dictionnaire={}
		result=[]
		x=[]
		for i in sort:
			if i[0] not in x:
				x.append(i[0])
		for i in x:
			p=[]
			for j in sort:
				if j[0]==i:
					p.append(j)
			result.append(p)
		for k,v in enumerate(result):
			dictionnaire[k]=v
		return dictionnaire
//Créons une méthode appelée get_groupsqui imprime l'animal/les animaux à l'intérieur de chaque groupe.
	def get_groups(self,dictionnaire):
		print(' ')
		print('Les animaux du Zoo par groupe alphabétique  : ')
		print(dictionnaire)

//Créez un objet appelé ramat_gan_safariet appelez toutes les méthodes.

ramat_gan_safari=Zoo('safari') 
print(f'Soyez lzs bienvenus au Zoo  {ramat_gan_safari.name}')
num=int(input('Combien d animaux, comptez vous ajouter dans le zoo : '))
for i in range(num):
	add=input('Quel animal, voulez vous ajouter : ')
	ramat_gan_safari.add_animal(add)
ramat_gan_safari.get_animals()
dictionnaire=ramat_gan_safari.sort_animals()
ramat_gan_safari.get_groups(dictionnaire)
//Exercice XP terminé