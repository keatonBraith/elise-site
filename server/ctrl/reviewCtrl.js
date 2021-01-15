module.exports = {
    getReviews: (req, res) => {
        const db = req.app.get("db");
        const {id} = req.params;
        const reviews = await db.Reviews.get_review(id);
        res.status(200).send(reviews);
    },

    addReview: (req, res) => {
        const db = req.app.get("db");
        const { id, title, review_body, stars } = req.body;
        db.Reviews.add_review([id, title, review_body, stars])
        .then((review) => res.status(200).send(review))
        .catch((err) => {
            res.status(500).send(err)
            console.log(err)
        });
    },

    getRecentReviews: async (req, res) => {
        const db = req.app.get("db");
        const reviews = await db.Reviews.get_recent_review();
        if (reviews) {
          res.status(200).send(reviews);
        } else {
          res.status(404).send("Error");
        }
      },

      getAvgRating: async (req, res) => {
          const db = req.app.get("db");
          const { id } = req.params;
          const ratings = await db.Reviews.get_avg_rating([id]);
          res.status(200).send(ratings);
      },

      updateReview: async (req, res) => {
          const db = req.app.get("db");
          const { id } = req.params;
          const { stars, title, review_body } = req.body;
          const [review] = await db.Reviews.update_rating({
              stars,
              title,
              review_body,
              course_id: id,
          });
          res.status(200).send(review);
      },

      deleteReview: async (req, res) => {
          const db = req.app.get("db");
          const { review_id } = req.body;
          db.Reviews.delete_review(review_id)
          .then((reviews) => res.status(200).send(reviews))
          .catch((err) => {
              res.status(500).send(err)
              console.log(err)
            });
      },
}