require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const { CONNECTION_STRING, SESSION_SECRET, SERVER_PORT } = process.env


const app = express();
app.use(express.json());

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}));

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