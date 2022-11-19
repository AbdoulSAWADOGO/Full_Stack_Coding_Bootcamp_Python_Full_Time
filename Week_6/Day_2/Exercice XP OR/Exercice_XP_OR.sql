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


-- Exercice 2 : Tableau des élèves
-- 'Lea Benichou' et 'Marc Benichou' sont jumeaux, ils doivent avoir les mêmes dates de naissance. Mettez à jour leurs dates de naissance au 02/11/1998.
UPDATE students SET birth_date='02/11/1998' WHERE last_name='Benichou';
-- Changez le nom de famille de David de 'Grez' à 'Guez'.
UPDATE students SET last_name='Guez' WHERE first_name='David';

-- Effacer
-- Supprimez l'élève nommée 'Lea Benichou' du tableau.
DELETE FROM students WHERE last_name='Benichou' AND first_name='Lea';

--Compter
-- Comptez le nombre d'élèves dans le tableau.
SELECT COUNT(*) FROM students;
-- Comptez le nombre d'élèves nés après le 1/01/2000.
SELECT COUNT(*) FROM students WHERE birth_date > '1/01/2000';

-- Insertion et modification
-- Ajoutez une colonne à la table des étudiants appelée math_grade .
ALTER TABLE students ADD COLUMN math_grade INTEGER ;
-- Ajoutez 80 à l'étudiant dont l'identifiant est 1.
UPDATE students SET math_grade=80 WHERE id_students=1;
-- Ajoutez 90 aux étudiants qui ont des identifiants de 2 ou 4.
UPDATE students SET math_grade=90 WHERE id_students IN (1,4);
-- Ajoutez 40 à l'élève dont l'identifiant est 6.
UPDATE students SET math_grade=40 WHERE id_students=6;
-- Comptez combien d'élèves ont une note supérieure à 83
SELECT COUNT(*) FROM students WHERE math_grade>83;
-- Ajoutez un autre étudiant nommé "Omer Simpson" avec la même date_de_naissance que celui déjà dans le tableau. Donnez-lui une note de 70.
INSERT INTO students VALUES(6,'Omer', 'Simpson', (SELECT birth_date FROM students WHERE last_name='Simpson' AND first_name='Omer'),70);
-- Trouver la somme de toutes les notes des élèves.
SELECT SUM(math_grade) as SumNote FROM students;
