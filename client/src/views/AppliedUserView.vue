<template>
    <div>
        
<h1>Users who applied for the job</h1>

<div class="container d-flex justify-content-start">
   
    <div v-for="user in appliedUsers" :key="user._id" class="card" style="width: 18rem;">
        <div class="card-body">
            <h6>user name:{{ user.name }}</h6>
            <h6>user email:{{ user.email }}</h6>
            <h6>user phone no:{{ user.phone_no }}</h6>
          <form :action="`/user/${user._id}`" method="get">
            <!-- Form fields go here -->
            <button class="btn btn-primary" type="submit">View user</button>
          </form>
       
          
     </div>
      </div>
   </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name:'AppliedUserView',
    data(){
        return {
          appliedUsers:[],
        }
    },
    methods:{
       async getAppliedUsers(){
       try{
        const id = this.$route.params.id;
            const response = await axios.get(`/jobs/${id}/appliedUsers`)
      
        this.appliedUsers = response.data;
      
       }
       catch(err){
        console.log(err);
       }
        }
    },
    mounted(){
        this.getAppliedUsers();
    }
}
</script>