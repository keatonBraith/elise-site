UPDATE videos
SET
video_title = ${video_title},
video_description = ${video_description},
video_link = ${video_link}
WHERE video_id = ${video_id};

RETURNING *;