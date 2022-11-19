-- Database: dvdrental
-- Exercice 1
-- Location de DVD
-- Découvrez combien de films il y a pour chaque note.
SELECT rating ,count(film_id) FROM film GROUP BY rating;
-- Obtenez une liste de tous les films classés G ou PG-13.
-- Filtrez davantage cette liste : recherchez uniquement les films qui durent moins de 2 heures et dont le prix de location (rental_rate) est inférieur à 3,00. Triez la liste par ordre alphabétique
SELECT  film_id,title,description,rating FROM film WHERE rating IN ('G','PG-13') AND (film.length/60)<2 AND rental_rate<3 ORDER BY title ASC;
-- Recherchez un client dans la table des clients et remplacez ses coordonnées par vos coordonnées à l'aide de SQL UPDATE.
UPDATE customer SET first_name='CHEICK',last_name='KEITA',email='keita@gmail.com',last_update=CURRENT_DATE WHERE customer_id=1;
-- Trouvez maintenant l'adresse du client et utilisez UPDATE pour remplacer l'adresse par votre adresse (ou créez-en une).
UPDATE address SET address='16 NELSON MANDELA' WHERE  address_id=(SELECT address_id FROM customer WHERE customer_id=1);