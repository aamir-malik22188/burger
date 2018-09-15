DROP DATABASE IF EXISTS burgers_DB;
CREATE database burgers_DB;
​
USE burgers_DB;
​
CREATE TABLE burgers (
 ID INTEGER (10) NOT NULL AUTO_INCREMENT,
 burger_name VARCHAR(100) NULL,
 devoured BOOLEAN NOT NULL,
 PRIMARY KEY (ID)

);
​
INSERT INTO burgers (burger_name, devoured)
VALUES ("Five Guys", True);

INSERT INTO burgers (burger_name, devoured)
VALUES ("McDonalds", True);

INSERT INTO burgers (burger_name, devoured)
VALUES ("Wendys", True);