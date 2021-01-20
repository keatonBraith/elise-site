module.exports = {
    getComments: async (req, res) => {
        const db = req.app.get("db");
        const {id} = req.params;
        const comments = await db.Comments.get_comments(id);
        res.status(200).send(comments);
    },

    addComment: (req, res) => {
        const db = req.app.get("db");
        const { course_id, comment_title, comment_body, user_id } = req.body;
        db.Comments.add_comment([course_id, comment_title, comment_body, user_id])
        .then((comment) => res.status(200).send(comment))
        .catch((err) => {
            res.status(500).send(err)
            console.log(err)
        });
    },

    getRecentComments: async (req, res) => {
        const db = req.app.get("db");
        const comments = await db.Comments.get_recent_comments();
        if (comments) {
            res.status(200).send(comments);
        } else {
            res.status(404).send("Error");
        }
    },

    updateComment: async (req, res) => {
        const db = req.app.get("db");
        const { id } = req.params;
        const { comment_title, comment_body} = req.body;
        const [comment] = await db.Comments.edit_comment({
            comment_title,
            comment_body,
            user_id: id,
        });
        res.status(200).send(comment);
    },

    deleteComment: (req, res) => {
        const db = req.app.get("db");
        const { comment_id } = req.body;
        db.Comments.delete_comment(comment_id)
        .then((comments) => res.status(200).send(comments))
        .catch((err) => {
            res.status(500).send(err)
            console.log(err)
        });
    },
}