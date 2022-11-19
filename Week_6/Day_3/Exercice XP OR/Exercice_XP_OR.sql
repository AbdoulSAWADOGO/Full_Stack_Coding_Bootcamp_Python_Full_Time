-- Exercice 1 : Location de DVD
-- Obtenez une liste de toutes les locations qui sont sorties (n'ont pas été rendues). Comment identifier ces films dans la base de données ?
SELECT * FROM rental WHERE return_date IS NULL;
-- Obtenez une liste de tous les clients qui n'ont pas rendu leurs locations. Assurez-vous de grouper vos résultats.
SELECT * FROM customer cu INNER JOIN rental r ON r.customer_id=cu.customer_id WHERE r.return_date IS NULL;
-- Obtenez une liste de tous les films d'action avec Joe Swank.
-- Avant de commencer, existe-t-il un raccourci pour obtenir ces informations ? Peut-être une vue ?SELECT f.title FROM film f INNER JOIN film_category fc ON f.film_id=fc.film_id INNER JOIN film_actor fa ON fa.film_id=f.film_id 
WHERE fc.category_id=(SELECT category_id FROM category WHERE name='Action') 
AND fa.actor_id=(SELECT actor_id FROM actor WHERE last_name='Swank' AND first_name='Joe');

-- Exercice 2: Joyeux halloween

-- Combien y a-t-il de magasins, et dans quelle ville et dans quel pays ils se trouvent.
SELECT COUNT(s.store_id) as Nombre, ci.city,co.country FROM store s INNER JOIN address ad ON s.address_id=ad.address_id INNER JOIN city ci ON
ci.city_id=ad.city_id INNER JOIN country co ON co.country_id=ci.country_id GROUP BY ci.city,co.country ;

-- Combien d'heures de temps de visionnage il y a au total dans chaque magasin - en d'autres termes, la somme de la durée de chaque article d'inventaire dans chaque magasin.
SELECT SUM(f.length), i.store_id FROM film f INNER JOIN inventory i ON f.film_id=i.film_id GROUP BY i.store_id;

-- Assurez-vous d'exclure tous les articles en stock qui ne sont pas encore retournés. (Oui, même au temps des zombies il y a des gens qui ne rendent pas leurs DVD)
SELECT cu.first_name,cu.last_name ,ci.city FROM customer cu INNER JOIN address ad ON cu.address_id=ad.address_id INNER JOIN city ci ON ci.city_id=ad.city_id
INNER JOIN store s ON cu.store_id=s.store_id WHERE cu.address_id=s.address_id;
-- Une liste de tous les clients dans les villes où se trouvent les magasins.
