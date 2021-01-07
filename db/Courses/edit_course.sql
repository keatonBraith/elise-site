UPDATE courses
SET
course_name = ${course_name},
description = ${description},
instructions = ${instructions},
course_pic = ${course_pic},
category_id = ${category_id}
WHERE course_id = ${course_id}
RETURNING *;