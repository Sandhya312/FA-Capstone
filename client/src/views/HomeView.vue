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
     
    }
  },

}
</script>

<style scoped>

.hero-section{
  position: relative;
}

</style>
