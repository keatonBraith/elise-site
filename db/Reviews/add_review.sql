INSERT INTO reviews
    (course_id, user_id, title, review_body, stars)
VALUES
    ($1, $2, $3, $4, $5);