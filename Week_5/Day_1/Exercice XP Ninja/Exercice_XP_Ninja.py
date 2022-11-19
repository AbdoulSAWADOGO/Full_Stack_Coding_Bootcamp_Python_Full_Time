// Historique des appels
// Création de la classe phone qui prend en paramètre phone_number
class Phone():
	def __init__(self,phone_number):
		self.phone_number=phone_number	
		self.call_history=[]
		self.messages=[]

	def add(self,string):
		self.call_history.append(string)
	
	def add2(self,string):
		self.messages.append(string)

	def name(self):
		return self.name
// Création de la méthode call avec pour paramètre other_phone
	def Call(self,other_phone):
		call1=f'{self.phone_number} have call {other_phone}'
		self.call_history.append(call1)
		
	// Cette méthode imprime le fichier de l'historique	// 
	def show_call_history(self):
		for i in self.call_history:
			print(i)
// Enregistrement des messages comme la methode call
	def send_message(self,other_phone,content):
		dic={'to':other_phone,'from': self.phone_number, 'content':content}
		self.messages.append(dic)
		
	def show_messages(self):
		for i in self.messages:
			print(i)
			
	def show_outgoing_messages(self):
		for i in self.messages:
			for j in i.keys():
				if j=='to':
					print(i)
	def show_incoming_messages(self):
		for i in self.messages:
			for j in i.keys():
				if j=='from':
					print(i)


Abdoul=Phone('64896986')
Sanou=Phone('62719876')
Abdoul.Call(Sanou.phone_number,Sanou)
Abdoul.send_message(Sanou.phone_number,Sanou,' How are u')
Sanou.send_message(Abdoul.phone_number,Abdoul,'come here')
Abdoul.send_message(Sanou.phone_number,Sanou,'How old are you')
Sanou.send_message(Abdoul.phone_number,Abdoul,'15 year old')
Abdoul.send_message(Sanou.phone_number,Sanou,'good aftrenoon')
print('\n')
print("KEITA call history :")
Abdoul.show_call_history()
print('\n')
print("SANOU call history :")
Sanou.show_call_history()
print('\n')
print("KEITA messages : ")
Abdoul.show_messages()
print("outgoings : ")
Abdoul.show_outgoing_messages()
print("incomings : ")
Abdoul.show_incoming_messages()
print('\n')
print("SANOU messages : ")
Sanou.show_messages()
print("outgoings : ")
Sanou.show_outgoing_messages()
print("incomings : ")
Sanou.show_incoming_messages()
