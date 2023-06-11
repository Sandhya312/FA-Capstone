const mongoose = require("mongoose");

const jobSchema = mongoose.Schema({
    title:String,
    company_name:String,
    job_type:String,
    salary:Number,
    openings:Number,
    start_date:Date,
    location:String,
    experience:String,
    probation_duration:String,
    mandatory_skills:Array,
    about_job:String,
    last_date:Date,
    appliedUsers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
    emp_id:String,
},
{
    timestamps:true,
}
)
module.exports = mongoose.model("Job",jobSchema);