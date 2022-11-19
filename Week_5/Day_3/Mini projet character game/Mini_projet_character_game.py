# Character game
# Création de la classe Character avec les attributs demandés par l'exercice
class Character():
    def __init__(self,name,life=20,attack=10):
        self.name = name
        self.life = life
        self.attack = attack

    def __str__(self):
        return f"\n:::: {self.name} stats :::: \n\t** life: {self.life}**\n\t** attack: {self.attack}**"
    
    def basic_attack(self,another):
        another.life -= 1
# Création des trois autres classes différentes qui héritent de la classe Character
class Druid(Character):
    def __init__(self,name,life=20,attack=10):
        Character.__init__(self,name,life,attack)

    def meditate(self):
        self.life += 10
        self.attack -= 2
        # return f"{self.name} life become: {self.life} and his attack become {self.attack}"

    def animal_help(self):
        self.attack -= 5

    def fight(self,another):
        another.life -= (0.75*self.life + 0.75*self.attack)

class Warrior(Character):
    def __init__(self,name,life=20,attack=10):
        Character.__init__(self,name,life,attack)

    def brawl(self,another):
        another.life -= 2*self.attack
        self.life += 0.5*self.attack
        # return f"{another.name} life is now: {another.life}\n {self.name} life is now: {self.life}"

    def train(self):
        self.life += 2
        self.attack += 2

    def roar(self,another):
        another.attack -= 3

class Mage(Character):
    def __init__(self,name,life=20,attack=10):
        Character.__init__(self,name,life,attack)

    def curse(self,another):
        another.attack -= 2

    def summon(self):
        self.attack +=3
    
    def cast_spell(self,another):
        another.life -= self.attack/self.life


Abdoul = Abdoul(name ='Abdoul',life=100)
toto = toto(name ='toto',life=90,attack=25)
magi = Mage(name ='mage',life=110,attack=15)

print(toto)
print(Abdoul)
print("\n::::::::::\t toto VS Abdoul\t:::::::::::::")
toto.brawl(Abdoul)
Abdoul.fight(toto)
print(toto)
print(Abdoul)
print("\n::::::::::\t toto train\t:::::::::::::")
toto.train()
print(toto)