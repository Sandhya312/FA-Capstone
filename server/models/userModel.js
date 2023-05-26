const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:String,
    email:String,
    phone_no:Number,
    password:String,
    address:String,
    appliedJobs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job',
    }],
    social_icon:{
        type:Array,
    },
    mySkills:{
        type:Array,
    },
    my_taglines:{
        type:Array,
    },
    is_varified:{
        type:Number,
        default:0,
    },
    is_emp:{
        type:Boolean,
        default:false,
    },
    postingJobs:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job',
    }]
},
{
    timestamps:true,
}
)

module.exports = mongoose.model("User",userSchema);