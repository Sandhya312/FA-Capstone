const asyncHandler = require("express-async-handler");
const Job = require('../models/jobsModel');
const User = require('../models/userModel');
const mongoose = require("mongoose");
const nodemailer = require('nodemailer');

const sendAppliedNotification = asyncHandler(async(student,job)=>{
    const transport= nodemailer.createTransport({
         service:'gmail',
         auth:{
             user:'jefemuneca@gmail.com',
             pass:process.env.EMAIL_PASS,
         }
     });
 
     const mailOptions= {
         from:'jefemuneca@gmail.com',
         to:student.email,
         subject:'Application submitted:'+job.title,
         html:`<div>
            <center><h2>  Application Submitted Successfully!</h2></center>

         <h3>Hey ${student.name}👋<h3>
        <p>  Your application for the ${job.title} of ${job.company_name}  has been submitted successfully.</p>
         
         <p>To check the progress of your application, you can login and check the status. </p>

        <p>  For any help or queries, check out our Help Page.</p>
         
         Thanks,
         Team JobPortal		
         </div>`,
 
     }
     transport.sendMail(mailOptions,function(err,info){
         if(err){
             console.log(err);
         }else{
             console.log("email has been sent:- ",info.response);
         }
     })
 })

// all job listing
const allJobs = asyncHandler(async(req,res)=>{
    const jobs = await Job.find({});
    res.status(202).send(jobs)

})


// job posting form
const postJob = asyncHandler(async(req,res)=>{
    const user = await User.findById(new mongoose.Types.ObjectId(req.session.user_id));
    if(user.is_emp){
        // res.render("jobpost")
        res.status(200).send(user);

    }else{
        res.status(200).send(user);

    }
  
   
})

// each job page
const jobPage = asyncHandler(async(req,res)=>{
     const job = await Job.findById(req.params.id);
    res.status(202).send(job);

})

// create job post
const createPost = asyncHandler(async(req,res)=>{
       const {title,company_name,salary,job_type,openings,start_date,location,exprience,probation_duration,mandatory_skills,about_job,last_date} = req.body;
       if( req.session.user_id){
        const id =  new mongoose.Types.ObjectId(req.session.user_id);
        const user = await User.findById(new mongoose.Types.ObjectId(req.session.user_id));
        const newPost = await Job.create({
            title,
            company_name,
            job_type,
            salary,
            openings,
            start_date,
            location,
            exprience,
            probation_duration,
            mandatory_skills,
            about_job,
            last_date,
            emp_id:id,
           })
           if(!user.postingJobs.includes(newPost._id)){
            user.postingJobs.push(newPost._id);
        }
        await user.save();
        res.status(202).redirect('/');

    }else{
        res.status(500).send({ error: 'Failed to create job post.' });

    }
})

const updateJob = asyncHandler(async(req,res)=>{
        const updatedJOb = await Job.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true},
        )
        res.status(202).send(updatedJOb);
})

const deleteJob = asyncHandler(async(req,res)=>{
        const removejob = await Job.findByIdAndRemove(req.params.id);
        res.status(202).send(removejob);
})
const applyJob = asyncHandler(async(req,res)=>{
    const user_id = req.body.user_id;
    const job = await Job.findById(req.params.id);
    console.log("apply job session id",req.session);
    if( user_id){
    console.log("apply job session id inside if",user_id);

        const id =  new mongoose.Types.ObjectId(user_id);
        const user = await User.findById(new mongoose.Types.ObjectId(user_id));
        if(!user.appliedJobs.includes(job._id)){
            user.appliedJobs.push(job._id);
        }
        await user.save();
        sendAppliedNotification(user,job);

        if(!job.appliedUsers.includes(user._id)){
            await job.appliedUsers.push(user._id);
        } await job.save();
    //    res.status(200).redirect('/user/'+id)
    res.status(200).send(id);
    }else{
        console.log("apply job session id not found");
        res.status(500).json({ error: 'Failed to create job post.' });
    }
})
// const applyJob = asyncHandler(async(req,res)=>{
  
//         const job = await Job.findById(req.params.id);
//         console.log("apply job session id",req.session);
//         if( req.session.user_id){
//         console.log("apply job session id inside if",req.session.user_id);

//             const id =  new mongoose.Types.ObjectId(req.session.user_id);
//             const user = await User.findById(new mongoose.Types.ObjectId(req.session.user_id));
//             if(!user.appliedJobs.includes(job._id)){
//                 user.appliedJobs.push(job._id);
//             }
//             await user.save();
//             sendAppliedNotification(user,job);

//             if(!job.appliedUsers.includes(user._id)){
//                 await job.appliedUsers.push(user._id);
//             } await job.save();
//         //    res.status(200).redirect('/user/'+id)
//         res.status(200).send(id);
//         }else{
//             console.log("apply job session id not found");
//             res.status(500).json({ error: 'Failed to create job post.' });
//         }
// })

const jobAppliedUsers = asyncHandler(async(req,res)=>{
    const users = [];
    const job = await Job.findById(req.params.id).populate('appliedUsers');
    const userIds = job.appliedUsers.map(user=> user._id);
    for(const userId of userIds){
        const user = await User.findById(userId);
        users.push(user);
    }
    res.send(users);


})


module.exports = {allJobs,jobPage,createPost,updateJob,deleteJob,applyJob,postJob,jobAppliedUsers};