CREATE TABLE books (
id SERIAL PRIMARY KEY,
title VARCHAR,
author VARCHAR,
description VARCHAR,
img VARCHAR
);

SELECT * FROM books;

INSERT INTO books (title, author, description, img)
VALUES('Train Dreams', 'Dennis Johnson', 'Recommended by Adrien', 'https://images-na.ssl-images-amazon.com/images/I/91cR7SY43SL.jpg'),
      ('Tenth of December', 'George Saunders', 'Assigned by Melanie', 'https://images-na.ssl-images-amazon.com/images/I/81-y8fgFTTL.jpg'),
      ('Infinite Jest', 'David Foster Wallace', 'Found online', 'https://images-na.ssl-images-amazon.com/images/I/81KBldResmL.jpg');

ALTER TABLE books 
ADD rating INTEGER;

SELECT * FROM books;

ALTER TABLE books 
DROP rating;

SELECT * FROM books;