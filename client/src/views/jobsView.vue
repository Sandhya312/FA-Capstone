<template>
    <div class="job-page">
        <div class="job-details">
           <div class="job-title">
             <h4>{{ job.title }}</h4>
             <p>{{ job.company_name }}</p>
           </div>
           <div class="job-frame">
              <div class=" frame stipend-frame">
                   <p class="frame-heading">Salary</p>
                   <p class="frame-amount">{{ job.salary }}</p>
              </div>
              <div class=" frame location-frame">
                   <p class="frame-heading">Location</p>
                   <p class="frame-amount">{{ job.location }}</p>
              </div>
              <div class=" frame duration-frame">
                   <p class="frame-heading">Probation Duration</p>
                   <p class="frame-amount">{{ job.probation_duration }}</p>
              </div>
              <div class=" frame apply-frame">
                   <p class="frame-heading">Openings</p>
                   <p class="frame-amount">{{ job.openings }}</p>
              </div>
           </div>

           <div class="job-desc">
              <h3>JOb Description</h3>
            <div class="job-desc-details">
              {{ job.about_job }}
            </div>
           </div>

           <div class="job-skills">
               <h3>Skill Required</h3>
               <div class="skill-badge" v-for="skill in job.mandatory_skills" :key="skill">
                 <h4>  {{ skill }} </h4>
               </div>
           </div>
           <div class="job-frame2">
              <div class=" frame stipend-frame">
                   <p class="frame-heading">Job Type</p>
                   <p class="frame-amount">{{ job.job_type }}</p>
              </div>
              <div class=" frame location-frame">
                   <p class="frame-heading">Experience</p>
                   <p class="frame-amount">{{ job.exprience }}</p>
              </div>
              <div class=" frame duration-frame">
                   <p class="frame-heading">Start Date</p>
                   <p class="frame-amount">{{ job.start_date }}</p>
              </div>
              <div class=" frame apply-frame">
                   <p class="frame-heading">Openings</p>
                   <p class="frame-amount">{{ job.openings }}</p>
              </div>
           </div>
           <form >
        <!-- Form fields go here -->
        <button class="submit-btn" @click.prevent="applyJob()" type="submit"> <p>Apply</p> </button>
      </form>
        </div>
    </div>
</template>

<script>
import axios  from 'axios';
export default {
    name:'jobsView',
    data(){
        return {
            job:'',
        }
    },
    methods:{
         async getJob(){
           try{
            const id = this.$route.params.id;
            const response = await axios.get(`https://fa-capstone.onrender.com/jobs/${id}`)
            this.job = response.data;
           
           }
           catch(err){
            console.log(err);
           }
         },
         async applyJob(){
             try{
                const id = this.$route.params.id;
                const response = await axios.post(`https://fa-capstone.onrender.com/jobs/${id}/apply`,{
                
                })
                console.log(response);
                this.$router.push({ path:`/user/${response.data}`});
             }
             catch(err){
                console.log(err);
             }
         }
    },
    created() {
       this.getJob();
    },
}
</script>

<style scoped>

p{
    margin-bottom: 0;
}
.job-page{
    padding: 5rem;
}
.job-details{
    position: relative;
width: 800px;
height: 810px;
margin: 0 auto;
background: #FFFFFF;
border-radius: 16px;
}
.job-details .job-title{
    position: absolute;
width: 262px;
height: 52px;
left: 32px;
top: 16px;
}

.job-details .job-title h4{
    position: absolute;
width: 262px;
height: 24px;
left: 32px;
top: 16px;
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 24px;
color: #000000;
}
.job-details .job-title p{
    position: absolute;
width: 212px;
height: 20px;
left: 32px;
top: 48px;
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 20px;
color: #484848;
}
.job-details .job-frame{
    display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0px 40px;
gap: 77px;
position: absolute;
width: 736px;
height: 80px;
left: 32px;
top: 116px;

background: #F4F4F4;
border-radius: 8px;
}
.job-details .job-frame .frame{
    display: flex;
flex-direction: column;
align-items: center;
padding: 0px;
gap: 8px;
width: 99px;
height: 44px;
flex: none;
order: 0;
flex-grow: 0;
}
.job-details .job-frame .location-frame{

width: 53px;
order: 1;
}
.job-details .job-frame .duration-frame{
 
width: 66px;
order: 2;


}
.job-details .job-frame .apply-frame{
width: 77px;
order: 3;
}
.job-details .job-frame .frame-heading{
    width: 112px;
    height: 16px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 0.02em;
    color: #787878;
    flex: none;
    order: 0;
    flex-grow: 0;
}
.job-details .job-frame .frame-amount{
    
width: 99px;
height: 20px;
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 20px;
text-align: center;
letter-spacing: 0.02em;
color: #161616;
flex: none;
order: 1;
flex-grow: 0;
}

.job-details .job-frame2{
    display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0px 40px;
gap: 77px;
position: absolute;
width: 736px;
height: 80px;
left: 32px;
top: 530px;

background: #F4F4F4;
border-radius: 8px;
}
.job-details .job-frame2 .frame{
    display: flex;
flex-direction: column;
align-items: center;
padding: 0px;
gap: 8px;
width: 99px;
height: 44px;
flex: none;
order: 0;
flex-grow: 0;
}
.job-details .job-frame2 .location-frame{

width: 53px;
order: 1;
}
.job-details .job-frame2 .duration-frame{
 
width: 66px;
order: 2;


}
.job-details .job-frame2 .apply-frame{
width: 77px;
order: 3;
}
.job-details .job-frame2 .frame-heading{
    width: 61px;
    height: 16px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 0.02em;
    color: #787878;
    flex: none;
    order: 0;
    flex-grow: 0;
}
.job-details .job-frame2 .frame-amount{
    
width: 99px;
height: 20px;
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 20px;
text-align: center;
letter-spacing: 0.02em;
color: #161616;
flex: none;
order: 1;
flex-grow: 0;
}



.job-details .job-desc h3{
position: absolute;
width: 110px;
height: 20px;
left: 32px;
top: 220px;
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 20px;
color: #000000;
}
.job-details .job-desc .job-desc-details{
    
position: absolute;
width: 736px;
height: 250px;
left: 32px;
top: 248px;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 180%;
color: #484848;

}
.job-details .job-skills h3{
    position: absolute;
width: 99px;
height: 20px;
left: 32px;
top: 347px;
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 20px;
color: #000000;
}
.job-details .job-skills .skill-badge{
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 6px 12px;
gap: 10px;
position: absolute;
left: 30px;
width: 46rem;
height: 5rem;
top: 385px;
background: #F4F4F4;
border-radius: 16px;
}
.job-details .submit-btn{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 24px;
    gap: 10px;
    position: absolute;
    width: 131px;
    height: 48px;
    left: 637px;
    top: 702px;
    background: #484848;
    border-radius: 8px;
    border: none;
    outline: none;
}

.job-details .submit-btn p{
    width: 83px;
height: 24px;
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #FFFFFF;
flex: none;
order: 0;
flex-grow: 0;
}
</style>