<template>
    <div>
        <form action="/user/login" method="post">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email</label>
      <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    </div>

    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" name="password" class="form-control" id="exampleInputPassword1">
    </div>
   
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>


    </div>
</template>

<script>
export default {
    name:"LoginView",
}
</script>

<style scoped>
form {
  background: #e5e1e2;
    margin: 5%;
    padding: 4%;
}
</style>