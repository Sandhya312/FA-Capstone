<template>
  <div class="home">
   
   <div class="hero-section">
    <BannerCom/>
    <HeroCom/>
   </div>
   <AllJobsCom/>

  </div>
</template>

<script>
import axios from 'axios';
import HeroCom from '../components/HeroCom.vue';
import BannerCom from '../components/BannerCom.vue';
import AllJobsCom from '@/components/AllJobsCom.vue';
// @ is an alias to /src
export default {
  name: 'HomeView',
  components:{
    HeroCom,
    BannerCom,
    AllJobsCom,
  },
  data(){
    return{
      jobs:[],
    }
  },
  methods:{
      async alljobs (){
      try{
   
       const result = await axios.get('/jobs')
         this.jobs  = result.data;
       
      }
      catch(err){
        console.log(err);
      }
    }
  },
  mounted(){
    this.alljobs();
  }
}
</script>

<style scoped>

.hero-section{
  position: relative;
}

</style>
