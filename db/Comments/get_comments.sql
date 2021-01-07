SELECT * FROM comments c 
FULL OUTER JOIN courses s ON c.course_id = s.course_id
WHERE course_id = $1;