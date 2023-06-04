<template>
  <div>
    <div class="register-page">
      <div class="banner">
        <h1>Find your dream job!</h1>
        <h4>Trusted by 300000+ students</h4>
        <div class="company-imgs">
          <img src="@/assets/airbnb.png" alt="airbnb" />
          <img src="@/assets/cardekho.png" alt="cardekho" />
          <img src="@/assets/cred.png" alt="cred" />
          <img src="@/assets/fynd.png" alt="fynd" />
          <img src="@/assets/nutanix.png" alt="nutanix" />
          <img src="@/assets/spinny.png" alt="spinny" />
          <img src="@/assets/tata.png" alt="tata" />
        </div>
      </div>
      <div class="register-form">
        <div class="signin-option">
          <h3>Create new account</h3>
          <router-link to="/login">Login</router-link>
        </div>
        <form @submit.prevent="register()">
          <div class="side">
            <div class="side-side mb-3">
              <label for="name" class="form-label">Name</label>
              <input
                type="name"
                name="name"
                v-model="user.name"
                class="form-control"
                id="name"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="side-side mb-3">
              <label for="email" class="form-label"
                >Email address</label
              >
              <input
                type="email"
                name="email"
                v-model="user.email"
                class="form-control"
                id="email"
                aria-describedby="emailHelp"
              />
            </div>
          </div>
          <div class="side">
            <div class="side-side mb-3">
              <label for="phone" class="form-label">Phone No</label>
              <input
                type="number"
                name="phone_no"
                v-model="user.phone_no"
                class="form-control"
                id="phone"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="side-side mb-3">
              <label for="exampleInputPassword1" class="form-label"
                >Password</label
              >
              <input
                type="password"
                name="password"
                v-model="user.password"
                class="form-control"
                id="password"
              />
            </div>
          </div>
          <div class="side">
            <div class="side-side mb-3">
              <label for="address" class="form-label">Address</label>
              <input
                type="name"
                name="address"
                v-model="user.address"
                class="form-control"
                id="address"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="side-side mb-3">
              <label for="skills" class="form-label">Skills</label>
              <input
                type="name"
                name="mySkills"
                v-model="user.mySkills"
                class="form-control"
                id="skills"
                aria-describedby="emailHelp"
              />
            </div>
          </div>
          <div class="side">
            <div class="side-side mb-3">
              <label for="tagline" class="form-label">
                My_taglines</label
              >
              <input
                type="name"
                name=" my_taglines"
                v-model="user.my_taglines"
                class="form-control"
                id="tagline"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="side-side">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  v-model="user.is_emp"
                  name="is_emp"
                  value="employee"
                  id="flexRadioDefault1"
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Employee
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  v-model="user.is_emp"
                  name="is_emp"
                  value="student"
                  id="flexRadioDefault2"
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  Student
                </label>
              </div>
            </div>
          </div>
          <div class="side">
            <div class="side-side mb-3">
              <label for="resume" class="form-label">Resume</label>
              <input
                type="resume"
                name="resume"
                v-model="user.resume"
                class="form-control"
                id="resume"
                aria-describedby="emailHelp"
              />
            </div>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>

      <div v-if="popup_msg !== ''">
        <div class="alert alert-info" role="alert">
          {{ popup_msg }}
        </div>
      </div>
    </div>

    <!-- <% 
if(typeof message !== 'undefined'){ %>
  <p style="color:green;"> <%=message%></p>
<%} %> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "RegisterView",
  data() {
    return {
      user: {
        name: "",
        email: "",
        phone_no: "",
        password: "",
        is_emp: "",
        my_taglines: "",
        mySkills: "",
        address: "",
        resume: "",
      },
      popup_msg: "",
    };
  },
  methods: {
    async register() {
      try {
        const response = await axios.post(
          "https://fa-capstone.onrender.com/user/register",
          {
            name: this.user.name,
            email: this.user.email,
            phone_no: this.user.phone_no,
            password: this.user.password,
            is_emp: this.user.is_emp,
            my_taglines: this.user.my_taglines,
            mySkills: this.user.mySkills,
            address: this.user.address,
            resume: this.user.resume,
          }
        );
       console.log(response.data);
        this.popup_msg = response.data;
        this.$router.push({ path: "/login" });
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped>
.register-page {
  display: flex;
  align-items: center;
  /* justify-content: center; */
  height: 85vh;
}
.register-page .banner {
  padding: 2%;
  background: #e5e1e2;
  height: 100%;
  width: 40%;
}
.register-page .banner .company-imgs img {
  height: 5rem;
  margin: 1rem;
}
.register-page .register-form {
  height: 100%;
  width: 60%;
  display: flex;
  padding: 2%;
  padding-top: 0;
  flex-direction: column;
  align-items: center;
}
.register-page .register-form .signin-option {
  height: 10%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px 0 10px;
}

form {
  border: 2px solid #cdcacac9;
  border-radius: 1rem;
  margin: 6px;
  padding: 1%;
  width: 100%;
  height: 100%;
}
form .side {
  display: flex;
}
form .side .side-side {
  width: 50%;
  padding: 5px;
}

form input {
  background: transparent;
  border: 2px solid #cdcacac9;
  height: 40px !important;
}
form input[type="radio"] {
  height: 15px !important;
}
.mbb {
  margin-bottom: 60px !important;
}
form button {
  width: 100%;
}
</style>
