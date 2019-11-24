CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name, devoured) VALUES ('Big Mac', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Spicy Chicken Sandwich', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Baconator', false)