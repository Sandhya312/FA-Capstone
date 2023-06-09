const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const Job = require('../models/jobsModel');
const mongoose = require('mongoose');

// send mail verify 
const sendVerifyMail = asyncHandler(async(name,email,user_id)=>{
   const transport= nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'jefemuneca@gmail.com',
            pass:process.env.EMAIL_PASS,
        }
    });

    const mailOptions= {
        from:'jefemuneca@gmail.com',
        to:email,
        subject:'For Verification Mail',
        html:'<p>Hii '+name+', please click here to <a href="https://fa-capstone.onrender.com/user/verify?id='+user_id+'">Verify</a> your mail.</p>',

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

//load  registration form
const loadRegister = asyncHandler(async(req,res)=>{
    const users = await User.find({});
    res.send(users);
})

// load login page
const loadLogin = asyncHandler(async(req,res)=>{
    const users = await User.find({});
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
    if(user){
        res.status(200).send(user);
    }else{
        console.log("user not found");
        
    }
});

// user profile edit load
const editLoad = asyncHandler(async(req,res)=>{
       const  id = req.query.id;
       const user = await User.findById({_id:id});
       if(user){ 
            res.send(user);
       }else{
        res.redirect('/user/login');
       }

})

// applied jobs of each user
const appliedJobs = asyncHandler(async (req, res) => {
    const jobs = [];
    const user = await User.findById(req.params.id);
    const jobIds = user.appliedJobs.map(job => job._id);
    for (const jobId of jobIds) {
      const job = await Job.findById(jobId);
      jobs.push(job);
    }

    if(!user.is_emp){
    
        res.send(jobs );

    }else{
        res.status(200).send(user);
    }
  });
  
// user registration post method
const userRegister = asyncHandler(async (req, res) => {
    const { name, email, phone_no, password,address,mySkills,my_taglines,resume } = req.body;
    const is_emp = req.body.is_emp === 'employee';
    let message='';
    if(!name || !email || !phone_no || !password || !req.body.is_emp ){
        message= "All fields are mandatory!"
        res.status(400).send(message);
    }
    const userAvailable = await User.findOne({email});
    if(userAvailable){
        message = "User is already registered";
        res.status(202).send(message);
    }else{
        
    // hashed password 
    const hashedPassword = await bcrypt.hash(password,10);
    const user = await User.create({
        name,
        email,
        phone_no,
        password:hashedPassword,
        is_emp,
        address,
        mySkills,
        my_taglines,
        resume
    })
    if(user){
        // nodemailer
        sendVerifyMail(req.body.name,req.body.email,user._id);
        message="Your registration has been successfully, Please verify your mail.";
        // res.status(202).render("register",{message:"Your registration has been successfully, Please verify your mail."});
        //  res.redirect('/user/login')
        res.send(message);
    }else{
         message = "Your registration is faild"
        res.status(400).send(message);

    }
    }

});
const verifyMail = asyncHandler(async(req,res)=>{
   const updatedInfo = await User.updateOne({_id:req.query.id},{$set:{is_varified:1}});
   res.render("email-verified")


})

// user login post
const UserLogin = asyncHandler(async (req, res) => {
    const {email,password} = req.body;
    let message='';
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password,user.password))) {
    if(user.is_varified===0){
        sendVerifyMail(user.name,email,user.id);
        message="Please verify your mail"
        res.send([0,message]);

    }else{
        req.session.user_id = user.id;
        console.log("login successfully",req.session.user_id);
        res.send([user.id,message]);
     
    }
    } else {
        message="Email or password is incorrect";
        res.status(400).send([0,message]);

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
        res.send( { jobs }); 
    }else{
        res.status(200).send({user});

    }
    
})

// update user profile
const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if(!user){
        res.status(404).send("user is not exists");
    }
    console.log(req.body,"this is patch");
    let data={};
    data = req.body;
    const updatedUser=await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true},
    )
    console.log(updatedUser,"updated user");
    // res.status(200).send(updatedUser);

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



