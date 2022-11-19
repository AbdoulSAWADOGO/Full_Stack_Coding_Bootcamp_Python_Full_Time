import json
# Classe menu manager
class MenuManager():
    def __init__(self,file):
        with open(file) as f:
            self.menu = json.load(f)
# Ajout d'un élément au menu
    def add_item(self,name, price):
        dict = {
            "name":name,
            "price":price
        }
        self.menu["items"].append(dict)
# Suppression d'un élément du menu après vérification
    def remove_item(self,name):
        deleted = False
        for i,item in enumerate(self.menu["items"]):
            if (item['name'].upper() == name.upper()):
                del self.menu["items"][i]
                deleted = True
        return deleted
# Sauvegarde du menu lorsque le gestionnaire a fini ces modifications
    def save_to_file(self,file,data):
        with open(file,"w") as f:
            json.dump(data,f,indent = 2,sort_keys = True)
            