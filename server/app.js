
require('dotenv').config();
const express = require('express');
const port = process.env.PORT || 5001;
const connectDb = require('./config/dbConnection');
const cors = require('cors');
const ejs = require("ejs");
const bodyParser = require("body-parser");
const session = require("express-session");


connectDb();

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.set('trust proxy', 1) // trust first proxy
app.use (session ({
    secret:process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    host: 'localhost',
}));


app.use('/user',require('./routes/userRoutes'));
app.use('/jobs',require('./routes/jobsRoutes'));

app.set("view engine","ejs");

app.get('/',(req,res)=>{
    res.render('home')
});


app.listen(port,()=>{
    console.log(`server is started at ${port}`);
})