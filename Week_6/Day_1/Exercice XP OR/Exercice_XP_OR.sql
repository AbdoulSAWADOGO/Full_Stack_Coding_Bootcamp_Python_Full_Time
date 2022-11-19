-- Database: bootcamp
-- Va chercher les quatre premiers élèves. Vous devez classer les quatre étudiants par ordre alphabétique de nom_de_famille.
SELECT * FROM students  ORDER BY last_name ASC LIMIT 4;
-- Récupérez les coordonnées du plus jeune étudiant.
SELECT * FROM students where birth_date = (SELECT MAX(birth_date) FROM students);
-- Allez chercher trois élèves en sautant les deux premiers élèves.
SELECT * FROM students  LIMIT 3 OFFSET 2;