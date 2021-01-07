require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const app = express();
const authCtrl = require("./ctrl/authCtrl");
const teacherCtrl = require("./ctrl/teacherCtrl");
const courseCtrl = require("./ctrl/courseCtrl");
const reviewCtrl = require("./ctrl/reviewCtrl");
const nodemailer = require('nodemailer');
const S3Ctrl = require('./ctrl/S3Ctrl');
const commentCtrl = require('./ctrl/commentctrl');
const { CONNECTION_STRING, SESSION_SECRET, SERVER_PORT, PASSWORD, EMAIL } = process.env


app.use(express.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
           user: EMAIL,
           pass: PASSWORD
       }
   });

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}));

//# AUTH ENDPOINTS
app.get("/auth/user", authCtrl.getUser);
app.post("/auth/register", authCtrl.register);
app.post("/auth/login", authCtrl.login);
app.delete("/auth/logout", authCtrl.logout);
app.put("/auth/user/:id", authCtrl.edit);

//# TEACHER ENDPOINTS
app.get("/auth/teacher", teacherCtrl.getTeacher);
app.post("/teacher/register", teacherCtrl.register);
app.post("/teacher/login", teacherCtrl.login);
app.delete("/teacher/logout", teacherCtrl.logout);
app.put("/teacher/:id", teacherCtrl.edit);
app.post("/teacher/about", teacherCtrl.about);

//# REVIEW ENDPOINTS
app.get("/api/reviews/:id", reviewCtrl.getReviews);
app.post("/api/review", reviewCtrl.addReview);
app.get("/api/recent", reviewCtrl.getRecentReviews);
app.get("/api/ratings/:id", reviewCtrl.getAvgRating);
app.put("/api/review/:id", reviewCtrl.updateReview);
app.delete("/api/review/:id", reviewCtrl.deleteReview);

//# COMMENT ENDPOINTS
app.get("/api/comments/:id", commentCtrl.getComments);
app.post("/api/comment", commentCtrl.addComment);
app.get("/api/comments/recent", commentCtrl.getRecentComments);
app.put("/api/comment/:id", commentCtrl.updateComment);
app.delete("/api/comment/:id", commentCtrl.deleteComment);

//# COURSE ENDPOINTS
app.get("/api/course/:id", courseCtrl.getCourse);
app.post("/api/course", courseCtrl.addCourse);
app.get("/api/courses", courseCtrl.getAllCourses);
app.put("/api/course/:id", courseCtrl.editCourse);
app.post("/api/video", courseCtrl.addVideo);
app.delete("/api/video/:id", courseCtrl.deleteVideo);
app.put("/api/video/:id", courseCtrl.editVideo);

//# AWS S3 ENDPOINTS
app.get('/api/signs3', S3Ctrl.sign_s3);
app.post('/auth/pic',authCtrl.pic);
app.post('/teacher/pic',teacherCtrl.pic);

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db)
    app.set('transporter', transporter)
    console.log('connected to database')
    app.listen(SERVER_PORT, () => console.log(`server connected on port ${SERVER_PORT}`))
}).catch(err => {
    console.log(err)
});