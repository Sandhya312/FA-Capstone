
require('dotenv').config();
const express = require('express');
const port = process.env.PORT || 5001;
const connectDb = require('./config/dbConnection');
// const errorHandler = require('./middleware/errorHandler');
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

app.use(session({
    secret:process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
  }));
// app.use('/api/company',require('./routes/companyRoutes'));
app.use('/user',require('./routes/userRoutes'));
app.use('/jobs',require('./routes/jobsRoutes'));
// app.use(errorHandler);
app.set("view engine","ejs");

app.get('/',(req,res)=>{
    res.render('home')
});


app.listen(port,()=>{
    console.log(`server is started at ${port}`);
})