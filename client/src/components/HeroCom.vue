<template>

    <div class="hero ">
  <div class="left">
   
        <h1>GET YOUR DREAM JOB</h1>
          <hr>
    <div>
      <div class="people">
        <div class="people-profile">
            <img class="circle" src="@/assets/profile-circle-picture-1.png" alt="img1">
            <img class="circle relative" src="@/assets/profile-circle-picture-21.png" alt="img2">
            <div class="circle plus-relative"><h4>+</h4></div>
        </div>
        <h4 class="hiredCount"> <span>87K+</span> People Hired</h4>
      </div>
    </div>
  </div>
  <div class="right">
    <img src="@/assets/hero_img1.png" alt="img">
   
  </div>
</div>
   
</template>

<script>
export default {
    name:'HeroCom',

}
</script>

<style scoped>
.hero{
    background-color: #EDEAEB;
    display: flex;
    position: absolute;
    top: 0;
    left: 13rem;
    padding: 1% 2%;
    width: 78%;
}
.left{
    width: 70%;
}
.left h1{
    font-family: 'Bebas Neue', sans-serif;
    font-size: 13rem;
    line-height: 180px;
}
.left hr{
    width: 50rem;
    margin: 0 0 1rem;
   
}
.left .people{
    height: 6rem;
    width: 23rem;
    border: 2px solid black;
    border-radius: 50rem;
    padding: 1%;
    display: flex;
    text-align: center;
    align-items: center;
}
.left .people .people-profile{
    height: 100%;
    width: 60%;
    display: flex;
    align-items: center;
}
.left .people .people-profile .circle{
    height: 3.5rem;
    border: 2px solid black;
    background-color: #f2c6c6;
    border-radius: 50%;
    width: 3.5rem;
    text-align: center;
}
.left .people .people-profile .relative{
    position: relative;
    top: 0;
    left: -18px;
}
.left .people .people-profile .plus-relative{
    position: relative;
    top: 0;
    left: -36px;
    padding: 10px;
}
.hiredCount{
    font-size: 18px;
    text-align: center;
    width: 40%;
}
.hiredCount span{
    font-size: 35px;
    text-align: center; 
}
.right{
    width:20%;
}
.right img{
    top: -39px;
    position: relative;
    left: -180px;
}
</style>