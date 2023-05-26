<template>
    <div>

<h1>Register here</h1>
<form method="post" action="/user/register">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Name</label>
      <input type="name" name="name" v-model="user.name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
   
    </div>
    <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" name="email" v-model="user.email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
        <label for="phone" class="form-label">Phone No</label>
        <input type="number" name="phone_no" v-model="user.phone_no" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" name="password" v-model="user.password" class="form-control" id="exampleInputPassword1">
    </div>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Address</label>
      <input type="name" name="address" v-model="user.address" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
   
    </div>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">MySkills</label>
      <input type="name" name="mySkills" v-model="user.mySkills" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
   
    </div>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label"> My_taglines</label>
      <input type="name" name=" my_taglines" v-model="user.my_taglines" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
   
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" v-model="user.is_emp" name="is_emp" value="employee" id="flexRadioDefault1">
      <label class="form-check-label" for="flexRadioDefault1">
       Employee
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" v-model="user.is_emp" name="is_emp" value="student" id="flexRadioDefault2">
      <label class="form-check-label" for="flexRadioDefault2">
      Student
      </label>
    </div>
    <button type="submit" class="btn btn-primary" >Submit</button>
  </form>

<!-- <% 
if(typeof message !== 'undefined'){ %>
  <p style="color:green;"> <%=message%></p>
<%} %> -->

    </div>
</template>

<script>
export default {
  name:'RegisterView',
  data(){
    return {
   user:{
    name:'',
    email:'',
    phone_no:'',
    password:'',
    is_emp:'',
    my_taglines:'',
    mySkills:'',
    address:'',
  }

    }
  },



}
</script>

<style scoped>
form {
  background: #e5e1e2;
    margin: 5%;
    padding: 4%;
}
</style>