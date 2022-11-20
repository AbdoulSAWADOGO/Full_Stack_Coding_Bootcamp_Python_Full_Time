-- Créez une table appelée product_orderset une table appelée items. Vous décidez quels champs doivent figurer dans chaque tableau, mais assurez-vous que le itemstableau comporte une colonne appelée prix.
CREATE TABLE items(
   id SERIAL NOT NULL,
   nom VARCHAR(30) NOT NULL,
   price NUMERIC NOT NULL,
   PRIMARY KEY(id)
);

-- Il doit y avoir une relation un à plusieurs entre la product_orderstable et la itemstable. Une commande peut contenir plusieurs articles, mais un article ne peut appartenir qu'à une seule commande.
 CREATE TABLE product_orders(
   id SERIAL NOT NULL,
   id_items INTEGER NOT NULL,
   num VARCHAR(20) NOT NULL UNIQUE,
   date_com date NOT NULL,
   PRIMARY KEY(id),
   CONSTRAINT fk_items FOREIGN KEY (id_items) REFERENCES items(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE users(
    id SERIAL NOT NULL,
    product_orders_id INTEGER NOT NULL,
    nom VARCHAR(50) NOT NULL,
    prenom VARCHAR(50) NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT fk_product_orders FOREIGN KEY (product_orders_id) REFERENCES product_orders(id) ON DELETE CASCADE ON UPDATE CASCADE
 );

-- Créez une fonction qui renvoie le prix total d'une commande donnée. 

CREATE OR REPLACE FUNCTION prix_total(fn VARCHAR(50)) 
 RETURNS NUMERIC AS $prixtotal$
 BEGIN
    RETURN(SELECT SUM(items.price) FROM items INNER JOIN product_orders ON items.id = product_orders.id_items WHERE product_orders.num = fn);
 END;
 $prixtotal$ LANGUAGE plpgsql;

-- CREATE OR REPLACE FUNCTION prix_total1(fn VARCHAR(50), lan VARCHAR(50)) 
--  RETURNS NUMERIC AS $prixtotal$
--  BEGIN
--     RETURN(SELECT SUM(items.price) FROM items INNER JOIN product_orders ON items.id = product_orders.id_items WHERE product_orders.num = fn AND product_orders.num = lan);
--  END;
--  $prixtotal$ LANGUAGE plpgsql;