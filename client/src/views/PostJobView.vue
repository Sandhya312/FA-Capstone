<template>
  <div class="post-jobs">

<h1>Please post a job for your company</h1>
<form  @submit.prevent="post_job()">
 <div class="inline-div">
  <div class="mb-3">
    <label for="title" class="form-label">Job Title</label>
    <input type="text" v-model="job.title" name="title" class="form-control" id="title" aria-describedby="emailHelp">
 
  </div>
  <div class="mb-3">
      <label for="company_name" class="form-label">Company Name</label>
      <input type="text" v-model="job.company_name" name="company_name" class="form-control" id="company_name" aria-describedby="emailHelp">
    </div>
 </div>
 <div class="inline-div">
  <div class="mb-3">
      <label for="mandatory_skills" class="form-label">Mandatory Skills</label>
      <input type="text" v-model="job.mandatory_skills" name="mandatory_skills" class="form-control" id="mandatory_skills">
    </div>
    <div class="mb-3">
      <label for="job_type" class="form-label">Job Type</label>
     
      <select
              class="form-select"
              v-model="job.job_type" name="job_type"  id="job_type"
              aria-label="Default select example"
            >
              <option value="Remote">Remote</option>
              <option value="In-Office">In-Office</option>
              <option value="Hybrid">Hybrid</option>
             
            </select>
    </div>
 </div>
 <div class="inline-div">
  <div class="mb-3">
      <label for="location" class="form-label">Job Location</label>
      <input type="text" v-model="job.location" name="location" class="form-control" id="location">
    </div>
    <div class="mb-3">
      <label for="openings" class="form-label">No. of Openings</label>
      <input type="number" v-model="job.openings" name="openings" class="form-control" id="openings" aria-describedby="emailHelp">
    </div>
 </div>
 <div class="inline-div">
  <div class="mb-3">
    <label for="start_date" class="form-label">Preferred Joining Date</label>
    <input type="date" id="start_date" v-model="job.start_date" name="start_date">
    <!-- <input type="text" v-model="job.start_date" name="start_date" class="form-control" id="start_date"> -->
  </div>

    <div class="mb-3">
      <label for="experience" class="form-label">Work Experience</label>
      <select id="experience"
              class="form-select"
              v-model="job.experience" name="exprience"
              aria-label="Default select example"
            >
              <option value="0-3">0-3 years</option>
              <option value="3+">3+</option>
              <option value="3-5">3-5</option>
            </select>
      <!-- <input type="text" v-model="job.experience" name="exprience" class="form-control" id="experience"> -->
    </div>
 </div>
  <div class="inline-div">
 
    <div class="mb-3">
      <label for="salary" class="form-label">Salary (LPA per Annum/CTC)</label>
      <input type="Number" v-model="job.salary" name="salary" class="form-control" id="salary">
    </div>
    <div class="mb-3">
      <label for="last_date" class="form-label">Last date to Apply</label>
      <input type="date" v-model="job.last_date" name="last_date" class="form-control" id="last_date">
    </div>
    <div class="mb-3">
      <label for="probation_duration" class="form-label">probation_duration</label>
      <select 
              class="form-select"
              v-model="job.probation_duration" name="probation_duration"  id="probation_duration"
              aria-label="Default select example"
            >
              <option value="1">1 </option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>


            </select>
      <!-- <input type="Number" v-model="job.probation_duration" name="probation_duration" class="form-control" id="probation_duration"> -->
    </div>
  
  </div>

 
    <div class="mb-3">
      <label for="about_job" class="form-label" >About Job</label>
      <textarea v-model="job.about_job"  name="about_job" class="form-control" id="about_job" 
              cols="70"
              rows="10"
            ></textarea>
    </div>
 
  <button type="submit" class="btn btn-primary">Submit</button>
</form>



  </div>
</template>
<script>
import axios from 'axios';
export default {
name:'PostJobView',
data(){
  return {
      job:{
        title:'',
        company_name:'',
        job_type:'',
        openings:'',
        start_date:'',
        location:'',
        experience:'',
        salary:'',
        probation_duration:'',
        mandatory_skills:'',
        about_job:'',
        last_date:'',

      }
  }
},
methods:{
 async post_job(){
     try{
      const user_id = localStorage.getItem('userId');
      const response = await axios.post('https://fa-capstone.onrender.com/jobs/postjob',{
        user_id,
        title:this.job.title,
        company_name:this.job.company_name,
        job_type:this.job.job_type,
        openings:this.job.openings,
        start_date:this.job.start_date,
        location:this.job.location,
        experience:this.job.experience,
        salary:this.job.salary,
        probation_duration:this.job.probation_duration,
        mandatory_skills:this.job.mandatory_skills,
        about_job:this.job.about_job,
        last_date:this.job.last_date,
      })
    
      this.$router.push({ path:`/user/${user_id}`});
     }
     catch(err){
      console.log(err);
     }
  }
}
}
</script>
<style scoped>
.post-jobs{
padding: 20px 100px;
}

form .inline-div{
display: flex;

  width: 100%;
}
.inline-div div:nth-child(1){
width: 60%;
padding: 15px;
}
.inline-div div:nth-child(2), .inline-div div:nth-child(3){
width: 40%;
padding: 15px;
}
input,textarea,select{
background: transparent;
border: 1px solid gray;
border-radius: 3px;
height: 3rem;
padding: 10px;
}
</style>