<template>
    <div class="login-page">
      <div class="banner">
          <h1>Find your dream job!</h1>
          <h4>Trusted by 300000+ students</h4>
          <div class="company-imgs">
            <img src="@/assets/airbnb.png" alt="airbnb">
            <img src="@/assets/cardekho.png" alt="cardekho">
            <img src="@/assets/cred.png" alt="cred">
            <img src="@/assets/fynd.png" alt="fynd">
            <img src="@/assets/nutanix.png" alt="nutanix">
            <img src="@/assets/spinny.png" alt="spinny">
            <img src="@/assets/tata.png" alt="tata">

          </div>
      </div>
       <div class="login-form">
        <div class="signin-option">
          <h3>Sign In</h3>
          <router-link to="/register">Create an account</router-link> 
        </div>
        <form @submit.prevent="login()">
    <div class="mb-3 mbb">
      <label for="exampleInputEmail1" class="form-label">Email</label>
      <input type="email" name="email" v-model="user.email" required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    </div>

    <div class="mb-3 mbb">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" v-model="user.password" required name="password" class="form-control" id="exampleInputPassword1">
    </div>
    <div class="mb-3 ">
      <label for="exampleInputEmail1" class="form-label">Forget Password?</label>
   
    </div>
   
    <button type="submit"  class="btn btn-primary">Submit</button>
  </form>
       </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name:"LoginView",
    data(){
      return {
         user:{
          email:'',
          password:'',
         }
      }
    },
 methods: {
    async login() {
      try {
        const response = await axios.post('https://fa-capstone.onrender.com/user/login', {
          email: this.user.email,
          password: this.user.password,
        });
        console.log("1:", response.data);
        localStorage.setItem('userId',response.data);
        this.$router.push(`/user/${response.data}`);
      } catch (err) {
        console.log(err);
      }
    },
   
  },
}
</script>

<style scoped>
.login-page{
  display: flex;
    align-items: center;
    /* justify-content: center; */
    height:85vh;
}
.login-page .banner{
  padding: 2%;
  background: #e5e1e2;
    height: 100%;
    width: 40%;
}
.login-page .banner .company-imgs img{
  height: 5rem;
    margin: 1rem;
}
.login-page .login-form{
  height: 100%;
    width: 60%;
    /* background: green; */
    display: flex;
    padding: 2%;
    padding-top: 0;
    flex-direction: column;
    align-items: center;
}
.login-page .login-form .signin-option {
  height: 10%;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 10px 0 10px;
}

form {
  border: 2px solid #cdcacac9;
    border-radius: 1rem;
    margin: 10px;
    padding: 2%;
    width: 60%;
    height: 90%;
}

form input{
  height: 50px !important;
  background: transparent;
  border: 2px solid #cdcacac9;
}
.mbb{
  margin-bottom: 60px !important;
}
form button{
  width: 100%;
}
</style>