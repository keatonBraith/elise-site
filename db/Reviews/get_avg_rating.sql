SELECT AVG(stars)
FROM reviews r 
FULL OUTER JOIN courses c ON r.course_id = c.course_id
WHERE c.course_id = $1;