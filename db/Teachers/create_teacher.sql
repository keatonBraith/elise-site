INSERT INTO teachers
(email, password, first_name, last_name, teacher_pic, account_display_name, country, street_address_1, street_address_2,city, state, zip, phone_number)
VALUES
($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
RETURNING *;