INSERT INTO teachers
(about, facebook, twitter, instagram, linkedin, website)
VALUES
($1, $2, $3, $4, $5, $6)
RETURNING *;