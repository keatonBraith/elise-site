UPDATE comments 
SET
comment_title = $1,
comment_body = $2
WHERE user_id = ${user_id}
RETURNING *;