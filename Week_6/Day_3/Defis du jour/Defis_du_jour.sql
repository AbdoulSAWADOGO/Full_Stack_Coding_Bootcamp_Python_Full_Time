--Première Partie :
--Création de deux tables : Client et Profil client avec une relation one to one
--La t&ble Client
CREATE TABLE customer (
	id SERIAL PRIMARY KEY,
	first_name VARCHAR(70) NOT NULL,
	last_name VARCHAR(70) NOT NULL
);

CREATE TABLE customer_profile (
	id SERIAL PRIMARY KEY,
	isLoggedIn BOOLEAN DEFAULT FALSE,
	customer_id INTEGER NOT NULL,
	FOREIGN KEY(customer_id) REFERENCES customer(id)
);

--Insertion de quelques clients
INSERT INTO customer (
	first_name,last_name
	) 
VALUES('John','Doe'),('Jerome','Lalu'),('Lea','Rive');
--Insertion de quelques profils de quelques clients
INSERT INTO customer_profile (
	isLoggedIn,customer_id
	) 
VALUES(
	TRUE,(
		SELECT id FROM customer WHERE first_name='John')
	),
(
	FALSE,(
		SELECT id FROM customer WHERE first_name='Jerome')
	);

-- Utilisons les types de jointures pertinents pour afficher :

-- Le prénom des clients connectés
SELECT first_name FROM customer  cu INNER JOIN customer_profile cp ON cu.id=cp.customer_id WHERE cp.isLoggedIn=TRUE;

-- Toutes les colonnes first_name et isLoggedIn des clients - même les clients qui n'ont pas de profil.
SELECT first_name ,isLoggedIn FROM customer  cu LEFT OUTER JOIN customer_profile cp ON cu.id=cp.customer_id;

-- Le nombre de clients non connectés
SELECT COUNT(first_name) FROM customer cu INNER JOIN customer_profile cp ON cu.id=cp.customer_id WHERE cp.isLoggedIn=FALSE;

