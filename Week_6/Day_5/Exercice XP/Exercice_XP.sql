-- Partie 1
-- Création de la base de donnée
-- Créez une nouvelle classe appelée MenuItem, les attributs doivent être le nom et le prix de chaque article.
class MenuItem:
    
    def __init__(self, id, nom, prix):
        self.id = id
        self.nom = nom
        self.prix = prix

    def exec_query(self,query):
        connection = psycopg2.connect(host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE )
        cursor = connection.cursor()
        cursor.execute(query)
        results = cursor.fetchall()
        connection.close()
        return results

        -- Créez plusieurs méthodes ( save, delete, update) ces méthodes permettront à un utilisateur de sauvegarder, supprimer et mettre à jour des éléments de la base de données.
    def save(self):
        query = f"INSERT INTO Menu (Nom, Prix) VALUES ('{self.nom}', {self.prix})"
        return self.exec_query(query)


    def delete_from_db(self):
        query=f"DELETE FROM Menu where Nom ='{self.nom}'"
        return self.exec_query(query)
        
    def update_db(self,ancien):
        query=f"UPDATE Menu SET Nom = '{self.nom}' WHERE Nom = '{ancien}'"
        self.exec_query(query)
        query =f"UPDATE Menu SET Prix = {self.prix} WHERE Nom = '{self.nom}'" 
        self.exec_query(query)

    -- Dans la MenuItemclasse, créez une méthode appelée allqui renverra une liste de tous nos MenuItemobjets.
    def all_(self):
        query=f'SELECT Nom,Prix FROM Menu'
        results = self.exec_query(query)
        print(list(results))
        return results

    -- Créez une autre méthode appelée get_by_namequi renverra un seul MenuItemobjet en fonction de son nom, si un objet n'est pas trouvé (il n'y a pas d'élément correspondant au nom dans la get_by_nameméthode) return None. 
    def get_by_name(self,name):
        query=f'select Nom from Menu where Nom ="{name}" '
        results= self.exec_query(query)
        if len(results) < 1:
            print('Aucune correspondance')
        else:    
            print(list(results))