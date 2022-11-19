-- Récupérez les 2 derniers clients par ordre alphabétique (AZ) - excluez 'id' des résultats.
SELECT first_name,last_name,id_customers FROM (SELECT first_name,last_name,id_customers FROM customers ORDER BY id_customers DESC LIMIT 2 ) tmp ORDER BY id_customers ASC ; 
-- Utilisez SQL pour supprimer tous les achats effectués par Scott.
DELETE FROM purchases pu WHERE pu.customer_id= (SELECT id_customers FROM customers WHERE last_name='Scott'); 
-- Scott existe-t-il toujours dans la table des clients, même s'il a été supprimé ? Essayez de le trouver.
SELECT * FROM customers WHERE last_name='Scott'; 
-- Utilisez SQL pour trouver tous les achats. Joignez les achats à la table des clients , de sorte que la commande de Scott apparaisse, bien qu'au lieu du prénom et du nom du client, vous ne devriez voir que vide/vide. (Quel type de jointure devez-vous utiliser ?).
SELECT * FROM customers cu LEFT OUTER JOIN purchases pu ON pu.customer_id=cu.id_customers; 
-- Utilisez SQL pour trouver tous les achats. Joignez les achats à la table des clients , afin que la commande de Scott n'apparaisse PAS. (Quel type de jointure devez-vous utiliser ?)
 SELECT * FROM customers cu RIGHT OUTER JOIN purchases pu ON pu.customer_id=cu.id_customers;