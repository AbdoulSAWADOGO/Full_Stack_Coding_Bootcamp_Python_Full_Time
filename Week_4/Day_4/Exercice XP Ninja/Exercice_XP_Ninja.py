#Comment t'appelles-tu?
# Ecriture de la fonction get_full_name qui prend trois arguments
def get_full_name(first_name, last_name,middle_name):
    print(f"{first_name} {middle_name} {last_name}")

get_full_name(first_name="SAWADOGO", last_name="Abdoul", middle_name="Na kogl loub zanga")

# Exercice 2 : Traduction de l'anglais en morse

morse_table= {
    "A": ".-",
    "B" : "-...",
    "C" : "-.-.",
    "D" : "-..",
    "E" : ".",
    "F" : "..-.",
    "G" : "--.",
    "H" : "....",
    "I" : "..",
    "J" : ".---",
    "K" : "-.-",
    "L" : ".-..",
    "M" : "--",
    "N" : "-.",
    "O" : "---",
    "P" : ".--.",
    "Q" : "--.-",
    "R" : ".-.",
    "S" : "...",
    "T" : "-",
    "U" : "..-",
    "V" : "...-",
    "W" : ".--",
    "X" : "-..-",
    "Y" : "-.--",
    "Z" : "--..",
}

def english_to_morse(sentence):
    translation = ""
    sentence = sentence.upper()
    for e in sentence :
        if (e.isalpha()):
            translation = translation + morse_table[e]+" "
        elif (e == " "):
            translation = translation + "/"
        else :
            return False            
    return translation

def morse_to_english(expression):
    if expression == "" or expression == " ":
        return False
    expression = expression.strip()
    translation = ""
    morse = expression.split(" ")
    for ele in morse :
        isWord=0
        e = ele
        if e[0] == "/": 
            isWord = 1
            e = e[1:]       
        isFind = 0
        for k,v in morse_table.items():
            if e == v:
                isFind = 1
                if isWord == 1:
                    translation = translation + " "+k
                else:
                    translation = translation + k
        if isFind == 0:
            return False
    return translation

print(english_to_morse("It was really hard"))
print(morse_to_english(".. - /.-- .- ... /.... .- .-. -.."))

# Exercice 3 : boite d'étoiles

def box_printer(word1,word2,word3,word4,word5):
    lists=[len(word1),len(word2),len(word3),len(word4),len(word5)]
    lis=[word1,word2,word3,word4,word5]
    maxs=max(lists)
    for i in range (maxs+2):
        print('*',end='')
    print('**')
    for e in lis:
        print(f'*{e}',end='')
        for j in range((maxs+2)-len(e)):
            print(' ',end='')
        print('*')
    for i in range (maxs+2):
        print('*',end='')
    print('**')

word1=input("enter word 1 : ")
word2=input("enter word 2 : ")
word3=input("enter word 3 : ")
word4=input("enter word 4 : ")
word5=input("enter word 5 : ")
box_printer(word1,word2,word3,word4,word5)
    