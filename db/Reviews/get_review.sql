SELECT * FROM reviews r 
JOIN courses c on r.course_id = c.course_id
JOIN users u ON u.user_id = r.user_id
WHERE c.course_id = $1;