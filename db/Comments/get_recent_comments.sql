SELECT * FROM comments c 
FULL OUTER JOIN courses s ON c.course_id = s.course_id
ORDER BY c.course_id DESC;