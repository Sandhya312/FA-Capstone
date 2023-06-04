<template>
    <div class="post-jobs">

<h1>Please post a job for your company</h1>
<form  @submit.prevent="post_job()">
    <div class="mb-3">
      <label for="title" class="form-label">Title</label>
      <input type="text" v-model="job.title" name="title" class="form-control" id="title" aria-describedby="emailHelp">
   
    </div>
    <div class="mb-3">
        <label for="company_name" class="form-label">Company_name</label>
        <input type="text" v-model="job.company_name" name="company_name" class="form-control" id="company_name" aria-describedby="emailHelp">
      </div>
    <div class="mb-3">
        <label for="job_type" class="form-label"> job_type</label>
        <input type="text" v-model="job.job_type" name="job_type" class="form-control" id="job_type" aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
        <label for="openings" class="form-label">openings</label>
        <input type="number" v-model="job.openings" name="openings" class="form-control" id="openings" aria-describedby="emailHelp">
      </div>
    <div class="mb-3">
      <label for="start_date" class="form-label">start_date</label>
      <input type="text" v-model="job.start_date" name="start_date" class="form-control" id="start_date">
    </div>
    <div class="mb-3">
        <label for="location" class="form-label">location</label>
        <input type="text" v-model="job.location" name="location" class="form-control" id="location">
      </div>
      <div class="mb-3">
        <label for="experience" class="form-label">experience</label>
        <input type="text" v-model="job.experience" name="exprience" class="form-control" id="experience">
      </div>
      <div class="mb-3">
        <label for="salary" class="form-label">Salary</label>
        <input type="text" v-model="job.salary" name="salary" class="form-control" id="salary">
      </div>
      <div class="mb-3">
        <label for="probation_duration" class="form-label">probation_duration</label>
        <input type="text" v-model="job.probation_duration" name="probation_duration" class="form-control" id="probation_duration">
      </div>
      <div class="mb-3">
        <label for="mandatory_skills" class="form-label">mandatory_skills</label>
        <input type="text" v-model="job.mandatory_skills" name="mandatory_skills" class="form-control" id="mandatory_skills">
      </div>
      <div class="mb-3">
        <label for="about_job" class="form-label">about_job</label>
        <input type="text" v-model="job.about_job"  name="about_job" class="form-control" id="about_job">
      </div>
      <div class="mb-3">
        <label for="last_date" class="form-label">last_date</label>
        <input type="text" v-model="job.last_date" name="last_date" class="form-control" id="last_date">
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
</style>