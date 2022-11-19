-- Exercice 1 : Location de DVD
-- Obtenez une liste de toutes les locations qui sont sorties (n'ont pas été rendues). Comment identifier ces films dans la base de données ?
SELECT * FROM rental WHERE return_date IS NULL;
-- Obtenez une liste de tous les clients qui n'ont pas rendu leurs locations. Assurez-vous de grouper vos résultats.
SELECT * FROM customer cu INNER JOIN rental r ON r.customer_id=cu.customer_id WHERE r.return_date IS NULL;
-- Obtenez une liste de tous les films d'action avec Joe Swank.
-- Avant de commencer, existe-t-il un raccourci pour obtenir ces informations ? Peut-être une vue ?SELECT f.title FROM film f INNER JOIN film_category fc ON f.film_id=fc.film_id INNER JOIN film_actor fa ON fa.film_id=f.film_id 
WHERE fc.category_id=(SELECT category_id FROM category WHERE name='Action') 
AND fa.actor_id=(SELECT actor_id FROM actor WHERE last_name='Swank' AND first_name='Joe');