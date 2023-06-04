<template>
  <div class="home">
   
   <div class="hero-section">
    <BannerCom/>
    <HeroCom/>
   </div>
   <AllJobsCom/>
   <HireCom/>

  </div>
</template>

<script>
import HeroCom from '../components/HeroCom.vue';
import BannerCom from '../components/BannerCom.vue';
import AllJobsCom from '@/components/AllJobsCom.vue';
import HireCom from '@/components/HireCom.vue';
// @ is an alias to /src
export default {
  name: 'HomeView',
  components:{
    HeroCom,
    BannerCom,
    AllJobsCom,
    HireCom
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
