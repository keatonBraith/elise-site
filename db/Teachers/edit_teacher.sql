UPDATE teachers
SET
email = ${email},
profile_pic = ${profile_pic},
first_name = ${first_name},
last_name = ${last_name},
account_display_name = ${account_display_name},
country = ${country},
street_address_1 = ${street_address_1},
street_address_2 = ${street_address_2},
city = ${city},
state = ${state},
zip = ${zip},
phone_number = ${phone_number}
WHERE user_id = ${user_id}
RETURNING *;