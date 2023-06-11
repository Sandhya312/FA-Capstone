<template>
  <div>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">Job Portal</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/">Home</router-link>
            </li>
            <li class="nav-item login" v-if="isUser">
         
              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  MyProfile
                </button>
                <ul class="dropdown-menu">
                  <li><p>Personal</p></li>
                  <li><router-link :to="`/user/${isUser}`">My Profile</router-link></li>
                  <li><router-link :to="`/user/${isUser}/edit`">Edit Profile</router-link></li>
                  <li>
                    <router-link v-if="!user.is_emp" :to="`/user/${isUser}/applied`">Applied Jobs</router-link>
                    <router-link v-else :to="`/user/${isUser}/myjobs`">My Jobs</router-link>

                  </li>
                  <li><hr class="dropdown-divider"></li>
                  <li><p>Support</p></li>
                  <li>  <button @click="logout" class="logout">Logout</button></li>
                </ul>
              </div>
             
            
            </li>
            <li class="nav-item login" v-else>
              <router-link to="/register">Register</router-link>
              <router-link to="/login">Login</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <router-view @login="onLogin" />
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "NavCom",
  data() {
    return {
      isUser: localStorage.getItem("userId"),
      user:{},
    };
  },
  methods: {
    async logout() {
     await axios
        .get("/user/logout")
        .then(() => {
          this.isUser = "";
          localStorage.clear();
          this.$router.push("/login");
        })
        .catch((error) => {
          console.error(error);
        });
    },
    async getUser() {
      try {
        const id = this.isUser;
        const response = await axios.get(`https://fa-capstone.onrender.com/user/${id}`);
        this.user = response.data;
        console.log("navbar",this.user);
    
      } catch (err) {
        console.log(err);
      }
    },
    onLogin(userId) {
      this.isUser = userId;
    },
  },
  mounted() {
    this.getUser();
  },
};
</script>

<style scoped>
nav {
  width: 80%;
  padding: 30px;
  position: relative;
  left: 10rem;
  font-family: "DM Sans", sans-serif;
}
.navbar-nav {
  margin: 0 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
/* .navbar-nav li a.router-link{
  text-decoration: none !important;
} */
nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none !important;
}
.login {
  width: 50%;
  display: flex;
  justify-content: space-evenly;
}
.login a,
.login button {
  /* border: 2px solid black; */
  width: 120px;
  display: flex;
  /* text-align: center; */
  border-radius: 20rem;
  height: 41px;
  align-items: center;
  justify-content: flex-start;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.dropdown-menu.show{
  min-width: 256px !important;
    display: flex;
    flex-direction: column;
    padding: 14%;
    text-align: left;
}
.dropdown-menu li p {
  color: gray !important;
}
.logout{
  border: none !important;
    background: transparent !important;
}
</style>
