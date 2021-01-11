const bcrypt = require("bcrypt");

module.exports = {
    login: async (req, res) => {
        const db = req.app.get("db");
        const {email, password} = req.body;
        const teacher = await db.Teachers.check_teacher(email);
        if (!teacher[0]) {
            return res.status(401).send("Incorrect Credentials");
        } else {
            const authenticated = bcrypt.compareSync(password, teacher[0].password);
            if (authenticated) {
                req.session.teacher = teacher[0];
                res.status(200).send(req.session.teacher);
            } else {
                res.status(403).send("Username or Password Wrong");
            }
        }
    },

    register: async (req, res) => {
        const db = req.app.get("db");
        const transporter = req.app.get("transporter");
        const {
            email,
            password,
            first_name,
            last_name,
            teacher_pic,
            account_display_name,
            country,
            street_address_1,
            street_address_2,
            city,
            state,
            zip,
            phone_number
        } = req.body;
        const existingTeacher = await db.Teachers.check_teacher(email);
        if (existingTeacher[0]) {
            return res.status(409).send("Teacher Already Exists");
        }
        const salt = bcrypt.genSalt(10);
        const hash = bcrypt.hashSync(password, salt);
        const newTeacher = await db.Teachers.create_teacher([
            email,
            password,
            first_name,
            last_name,
            teacher_pic,
            account_display_name,
            country,
            street_address_1,
            street_address_2,
            city,
            state,
            zip,
            phone_number
        ]);
        const mailOptions = {
            from: "keatonbraith@gmail.com",
            to: email,
            subject: "Welcome to Our Site",
            text: `Welcome ${first_name}!, We're excited to have you as a course creator here on our site. Here is your profile info! First Name: ${first_name} Last Name: ${last_name} Account Name: ${account_display_name}`,
            html: `<b>Welcome ${first_name}! </b><br> We're excited to have you as a course creator here on our site. Here is your profile info! </b><br> First Name: ${first_name} </b><br> Last Name: ${last_name} </b><br> Username: ${username} </b>`,
          };
          transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              return console.log(error);
            }
            console.log("Email sent successfully!");
          });
          req.session.teacher = newTeacher[0];
          res.status(200).send(req.session.teacher);
    },

    logout: (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    },

    getTeacher: (req, res) => {
        if (req.session.teacher) {
            res.status(200).send(req.session.teacher);
        } else {
            res.status(404).send(`Get Teacher`);
        }
    },

    edit: async (req, res) => {
        const { email, first_name, last_name, teacher_pic, account_display_name, country, street_address_1, street_address_2, city, state, zip, phone_number} = req.body;
        const {id} = req.params;
        const db = req.app.get("db");
        const [teacher] = await db.Teachers.edit_teacher({
            email, 
            first_name, 
            last_name, 
            teacher_pic, 
            account_display_name, 
            country, 
            street_address_1, 
            street_address_2, 
            city, 
            state, 
            zip, 
            phone_number,
            teacher_id: id,
        });
        req.session.teacher = teacher;
        res.status(200).send(teacher);
    },

    pic: async (req, res) => {
        const {teacher_pic} = req.body;
        const {teacher_id} = req.session.teacher;
        const db = req.app.get("db");
        await db.Teachers.edit_teacher_pic({
            teacher_pic,
            teacher_id,
        });
        req.session.teacher.teacher_pic = teacher_pic;
        res.sendStatus(200);
    },

    about: async (req, res) => {
        const db = req.app.get("db");
        const {id} = req.params;
        const {
            about,
            facebook,
            twitter,
            instagram,
            linkedin,
            website,
        } = req.body;
        db.Teachers.add_about([about, facebook, twitter, instagram, linkedin, website, id])
        .then((about) => res.status(200).send(about))
        .catch((err) => {
            res.status(500).send({
                errorMessage: "Oops! Something Went Wrong.",
            })
            console.log(err);
        });
    }
};