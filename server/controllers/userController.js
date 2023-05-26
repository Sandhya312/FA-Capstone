const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const Job = require('../models/jobsModel');
const mongoose = require('mongoose');
// shckgzsxbauzizxz
// send mail verify 
const sendVerifyMail = asyncHandler(async(name,email,user_id)=>{
   const transport= nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'jefemuneca@gmail.com',
            pass:'shckgzsxbauzizxz',
        }
    });

    const mailOptions= {
        from:'jefemuneca@gmail.com',
        to:email,
        subject:'For Verification Mail',
        html:'<p>Hii '+name+', please click here to <a href="http://localhost:5000/user/verify?id='+user_id+'">Verify</a> your mail.</p>',

    }
    transport.sendMail(mailOptions,function(err,info){
        if(err){
            console.log(err);
        }else{
      
        }
    })
})


 

// all users list
const allUsers = asyncHandler(async(req,res)=>{
    const users = await User.find({});
    res.status(202).send(users);
})

// registration form
const loadRegister = asyncHandler(async(req,res)=>{
    const users = await User.find({});
    // res.render("register")
    res.send(users);
})

// load login page
const loadLogin = asyncHandler(async(req,res)=>{
    const users = await User.find({});
    // res.render("login")
    // res.send(users)
    res.send('');
    
})

// logout
const logout = asyncHandler(async(req,res)=>{
    req.session.destroy();
    res.redirect('/user/login');
})

// each user profile
const userProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    // res.status(200).render("user",{user});
    res.status(200).send(user);
});

// user profile edit load
const editLoad = asyncHandler(async(req,res)=>{
       const  id = req.query.id;
       const user = await User.findById({_id:id});
       if(user){ 
            //  res.render('edit',{user});
            res.send(user);

       }else{
        res.redirect('/user/login');
       }

})

// applied jobs of each user
const appliedJobs = asyncHandler(async (req, res) => {
    const jobs = [];
    // const user = await User.findById(req.params.id).populate('appliedJobs');
    const user = await User.findById(req.params.id);
    const jobIds = user.appliedJobs.map(job => job._id);
    for (const jobId of jobIds) {
      const job = await Job.findById(jobId);
      jobs.push(job);
    }

    if(!user.is_emp){
        // res.render('appliedjob', { jobs });
        res.send(jobs );

    }else{
        // res.status(200).render("user",{user});
        res.status(200).send(user);
    }
  });
  
// user registration post method
const userRegister = asyncHandler(async (req, res) => {
    const { name, email, phone_no, password,address,mySkills,my_taglines } = req.body;
    const is_emp = req.body.is_emp === 'employee';
    
    if(!name || !email || !phone_no || !password || !req.body.is_emp ){
        // res.status(400).render("register",{message:"All fields are mandatory"});
        res.status(400).send({message:"All fields are mandatory"});

    }
    const userAvailable = await User.findOne({email});
    if(userAvailable){
        // res.status(202).render("register",{message:"User already registered"});
        res.status(202).send({message:"User already registered"});

     
    }

    // hashed password 
  
    const hashedPassword = await bcrypt.hash(password,10);
      if(is_emp){
      
      }
    const user = await User.create({
        name,
        email,
        phone_no,
        password:hashedPassword,
        is_emp,
        address,
        mySkills,
        my_taglines
    })
    if(user){
        // nodemailer
        sendVerifyMail(req.body.name,req.body.email,user._id);
        // res.status(202).render("register",{message:"Your registration has been successfully, Please verify your mail."});
        res.status(202).send({message:"Your registration has been successfully, Please verify your mail."});

    }else{
        // res.status(400).render("register",{message:"Your registration is failed"});
        res.status(400).send({message:"Your registration is failed"});

    }
});
const verifyMail = asyncHandler(async(req,res)=>{
   const updatedInfo = await User.updateOne({_id:req.query.id},{$set:{is_varified:1}});

   res.render("email-verified")
// res.send(updatedInfo);

})

// user login post
const UserLogin = asyncHandler(async (req, res) => {
    const {email,password} = req.body;
    if(!email || !password){
        // res.status(400).render('login',{message:"All field are mandatory"});
        res.status(400).send({message:"All field are mandatory"});

    }
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password,user.password))) {
    if(user.is_varified===0){
        sendVerifyMail(user.name,email,user.id);
        // res.render('login',{message:"Please verify your mail"});
        res.send({message:"Please verify your mail"});

    }else{
        req.session.user_id = user.id;
        // localStorage.setItem("user_id",user.id);
        res.redirect('/user/'+user.id);
    }
        // const accessToken = jwt.sign({
        //     user:{
        //         email:user.email,
        //         id:user.id,
        //     }
        // },process.env.ACCESS_TOKEN_SECRET,
        // {expiresIn:"10m"}
        // )
        
    } else {
        // res.status(400).render('login',{message:"Email or password is incorrect"});
        res.status(400).send({message:"Email or password is incorrect"});

    }
});

const myJobs = asyncHandler(async(req,res)=>{
    const jobs = [];
    const user = await User.findById(req.params.id);
    const jobIds = user.postingJobs.map(job => job._id);
    for (const jobId of jobIds) {
      const job = await Job.findById(jobId);
      jobs.push(job);
    }

   
    if(user.is_emp){
        // res.render('myjobs', { jobs }); 
        res.send( { jobs }); 

    }else{
        // res.status(200).render("user",{user});
        res.status(200).send({user});

    }
    
})

// update user profile
const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if(!user){
        res.status(404).send("user is not exists");
    }
    const updatedUser=await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true},
    )
    // res.status(200).json(updatedUser);
    res.status(200).send(updatedUser);

 })

//  delete user profile
 const deleteUserDetails = asyncHandler(async(req,res)=>{
    const user = await User.findById(req.params.id);
    if(!user){
        res.status(404).send("user is not exists");
    }
    const removeUser = await User.findByIdAndRemove(req.params.id);
    res.status(200).send(removeUser);
 })

module.exports = { userProfile, appliedJobs,logout,editLoad, updateUserProfile, userRegister, UserLogin,deleteUserDetails,allUsers,loadRegister,loadLogin,verifyMail,myJobs };



// register login - after end application - session + cookies 
// job in applied job section - 