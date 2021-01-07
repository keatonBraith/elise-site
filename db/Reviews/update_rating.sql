UPDATE reviews
SET 
stars = $1,
title = $2,
review_body = $3
WHERE course_id = $4;

RETURNING *;