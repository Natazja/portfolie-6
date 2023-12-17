drop database if exists cafes;
create database cafes;
use cafes;
drop table if exists favorites;
drop table if exists cafes;
drop table if exists users;

create table cafes (
	cafe_name varchar(255),
    adress varchar(255),
    postal_code int,
    area varchar(255),
    city varchar(255),
    stars decimal,
    cafe_id int not null,
    primary key (cafe_id)
    );

create table users (
	user_name varchar(255), 
    e_mail varchar(255), 
    favorite_cafes varchar(255),
    password varchar(255),
    account_type varchar(255),
    user_id int not null,
    primary key (user_id)
    );


CREATE TABLE favorites (
    favorite_id INT not null,
    user_id INT,
    cafe_id INT,
    popularity INT,
    primary key (favorite_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (cafe_id) REFERENCES cafes(cafe_id)
);

INSERT INTO users (user_name, e_mail, favorite_cafes, password, account_type, user_id)
VALUES
    ('Alice', 'alice@email.com', 'Democratic Coffee', 'Gk8hPf4s', 'Standard', 1),
    ('Bob', 'bob@email.com', 'Original Coffee', 'Xy7ZaR3q', 'Personal', 2),
    ('Charlie', 'charlie@email.com', 'The Coffee Collective', 'Lm6sNv2t', 'Personal', 3),
    ('David', 'david@email.com', 'Mad & Kaffe', 'Bf9pQc5x', 'Personal', 4),
    ('Eva', 'eva@email.com', 'Kalaset', 'Rd2vTk6z', 'Personal', 5),
    ('Frank', 'frank@email.com', 'Coffee First', 'Hj4qXu8w', 'Personal', 6),
    ('Grace', 'grace@email.com', 'H A N S Coffee', 'Ml1oVr7p', 'Personal', 7),
    ('Henry', 'henry@email.com', 'Prolog', 'Sg5dYb9f', 'Personal', 8),
    ('Ivy', 'ivy@email.com', 'Paludan Bog & Café', 'Wz3nUx7k', 'Personal', 9),
    ('Jack', 'jack@email.com', 'Rist', 'Pq6rHv8l', 'Personal', 10),
    ("test", "test@test.com", "Rist", "test", "Personal", "11");

INSERT INTO cafes (cafe_name, adress, postal_code, area, city, stars, cafe_id)
VALUES
    ('Democratic Coffee', 'Krystalgade 15', 1172, 'København K', 'København', 4.4, 1),
    ('Original Coffee', 'Store Kongensgade 23', 1264, 'København K', 'København', 4.5, 2),
    ('Atelier September', 'Kronprinsessegade 62', 1306, 'København K', 'København', 3.9, 3),
    ('The Coffee Collective', 'Jægersborggade 10', 2200, 'Nørrebro', 'København', 4.5, 4),
    ('Mad & Kaffe', 'Sønder Blvd. 68', 1720, 'Vesterbro', 'København', 4.5, 5),
    ('Mirabelle bakery', 'Guldbergsgade 29', 2200, 'Nørrebro', 'København', 4.1, 6),
    ('Kalaset', 'Vendersgade 16', 1363, 'København K', 'København', 4.2, 7),
    ('Granola', 'Værnedamsvej 5', 1819, 'København K', 'København', 4.0, 8),
    ('Coffee First', 'Gl. Kongevej 1, st', 1610, 'Vesterbro', 'København', 4.4, 9),
    ('H A N S Coffee', 'Boldhusgade 6', 1062, 'København K', 'København', 4.7, 10),
    ('Prolog', 'Høkerboderne 16', 1712, 'Vesterbro', 'København', 4.6, 11),
    ('Paludan Bog & Café', 'Fiolstræde 10', 1171, 'København K', 'København', 4.5, 12),
    ('Rist', 'Værnedamsvej 4, B', 1619, 'København K', 'København', 4.5, 13);

INSERT INTO favorites (user_id, cafe_id, popularity, favorite_id) VALUES 
	(1, 1, 5, 1),
	(1, 2, 4, 2),
	(2, 1, 3, 3), -- User 2 favorites Cafe 1 with popularity 3
	(2, 3, 5, 4); -- User 2 favorites Cafe 3 with popularity 5
    
    select * from users;








    


    