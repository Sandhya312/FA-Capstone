<template>
    <div class="banner">
      <h4>Job Portal</h4>
      <div class="bottom">
        <hr >
        <h4 class="vertical-text">No.1 Jobsekker Platform</h4>
      </div>
    </div>
</template>

<script>
export default {
    name:'BannerCom'
}
</script>

<style scoped>
.banner{
    position: relative;
    border-radius: 22px;
    background: linear-gradient(#9595f7,#a55ba5);
    height: 38rem;
    width: 5.5rem;
    top: -36px;
    padding: 1%;
    left: 20px;
    z-index: 999;
}
.banner h4{
    font-size: 20px;
}
.banner hr{
    width: 91px;
    margin-bottom: 4.2rem;
    transform: rotate(90deg);
    opacity: 1;
}
.banner .bottom{
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 90%;
    justify-content:flex-end;
}
.banner .vertical-text{
    writing-mode: vertical-rl;
    text-orientation: mixed;
}
</style>