<template>
    <div>
        <h1>my job page</h1>
    </div>
</template>

<script>
import axios  from 'axios';
export default {
    name:'jobsView',
    data(){
        return {
          
            postJobs:[],


        }
    },
    methods:{
      
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
       
        this.getPostJobs();
    }
  
}
</script>