SELECT * FROM reviews r 
FULL OUTER JOIN courses c ON r.course_id = c.cours_id
WHERE stars IS NOT NULL
ORDER BY r.review_id DESC;