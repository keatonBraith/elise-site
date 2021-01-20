module.exports = {
    getCourse: async (req, res) => {
        const db = await req.app.get("db");
        const { id } = req.body;
        const course = db.Courses.get_course(id);
        res.status(200).send(course);
    },

    addCourse: (req, res) => {
        const db = req.app.get("db");
        const { teacher_id, course_name, description, instructions, course_pic, category_id } = req.body;
        db.Courses.add_course([teacher_id, course_name, description, instructions, course_pic, category_id])
        .then((course) => res.status(200).send(course))
        .catch((err) => {
            res.status(500).send(err)
            console.log(err)
        });
    },

    getAllCourses: async (req, res) => {
        const db = await req.app.get("db");
        const courses = db.Courses.get_all_courses();
        res.status(200).send(courses)
    },

    editCourse: async (req, res) => {
        const db = await req.app.get("db");
        const { id } = req.params;
        const { course_name, description, instructions, course_pic } = req.body;
        const [course] = await db.Courses.edit_course({
            course_name,
            description,
            instructions,
            course_pic,
            category_id: id
        });
        res.status(200).send(course);
    },

    addVideo: (req, res) => {
        const db = req.app.get("db");
        const {course_id, video_title, video_description, video_link} = req.body;
        db.Videos.add_video([course_id, video_title, video_description, video_link])
        .then((video) => res.status(200).send(video))
        .catch((err) => {
            res.status(500).send(err)
            console.log(err)
        });
    },

    deleteVideo: (req, res) => {
        const db = req.app.get("db");
        const { video_id } = req.body;
        db.Videos.delete_video(video_id)
        .then((videos) => res.status(200).send(videos))
        .catch((err) => {
            res.status(500).send(err)
            console.log(err)
        });
    },

    editVideo: async (req, res) => {
        const db = req.app.get("db");
        const { video_id } = req.params;
        const { video_title, video_description, video_link } = req.body;
        const [video] = await db.Videos.edit_video({
            video_title,
            video_description,
            video_link,
            video_id,
        });
        res.status(200).send(video);
    },
}