// Exercice 1 : Géométrie
// Classe Circle
class Circle:
	def __init__(self):
		self.radius=1.0
		
	// Calcul du périmètre
	def perimeter(self):
		Perimeter=2*3.14*self.radius
		print(f'perimeter={Perimeter}')
// Calcul de l'aire
	def area(self):
		Area=3.14*self.radius*self.radius
		print(f'Area={Area}')
// Impression de la définition géométrie
	def geometric(self):
		print(f'radius={self.radius}')
		
géométrie=Circle()
géométrie.perimeter()
géométrie.area()
géométrie.geometric()


// Exercice 2 : Classe de liste personnalisée

// Cr&ation de la classe Mylist qui recoit une liste de lettres
class MyList:
	def __init__(self,letter):
		self.letter=letter
		// Ajout d'une méthode qui renvoie la liste inversée
	def reverseList(self):
		print(f'the reversed list= {reversed(self.letter)}')
		// Ajout d'une méthode qui renvoie la liste triée
	def sortList(self):
		print(f'the sorted list= {sorted(self.letter)}')
		
list=MyList(['orange','mangoes','tomatoes','potatoes','name','cool','yeh'])
print(f'La liste inversée==>{list.reverseList()}')
print(f'La liste triée==>{list.sortList()}')
