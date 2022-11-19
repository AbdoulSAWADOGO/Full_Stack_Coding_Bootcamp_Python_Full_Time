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