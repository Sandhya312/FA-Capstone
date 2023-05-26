<template>
    <div>
        <h1>Applied job page</h1>
    </div>
</template>

<script>
import axios  from 'axios';
export default {
    name:'jobsView',
    data(){
        return {
            appliedJobs:[],
            postJobs:[],


        }
    },
    methods:{
       async getAppliedJobs(){
          try{
            
            const id = this.$route.params.id;
            const response = await axios.get(`/user/${id}/applied`)
    
            this.appliedJobs = response.data;
            
          }
          catch(err){
                 console.log(err);
          }
        },
        async getPostJobs(){
          try{
            
            const id = this.$route.params.id;
            const response = await axios.get(`/user/${id}/myjobs`)
 
            this.postJobs = response.data;
          }
          catch(err){
                 console.log(err);
          }
        }
    },
    created(){
        this.getAppliedJobs();
        this.getPostJobs();
    }
  
}
</script>