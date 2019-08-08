UPDATE books 
SET title = ${new_title}, author = ${new_author}, description = ${new_description}, img = ${new_img}
WHERE id = ${id};

SELECT * FROM books;