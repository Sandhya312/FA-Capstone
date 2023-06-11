<template>
  <div>
    <!-- Sidenav -->
    <div class="sidenav">
      <div class="profile">
        <img
          src="@/assets/circle-picture-1.jpeg"
          alt=""
          width="100"
          height="100"
        />

        <div class="name">
          {{ user.name }}
        </div>
        <div class="job">
          {{ user.my_taglines }}
        </div>
      </div>

      <div class="sidenav-url">
        <div class="url">
          <a href="#profile" class="active">Profile</a>
          <hr align="center" />
        </div>
        <div v-if="!user.is_emp" class="url">
          <router-link :to="`/user/${user._id}/applied`"
            >Applied Jobs</router-link
          >
          <hr align="center" />
        </div>
        <div v-else class="url">
          <router-link :to="`/user/${user._id}/myjobs`"
            >Posted Jobs</router-link>
            <hr align="center" />
            <router-link to="/postjob">Post Job</router-link>
            <hr align="center" />
        </div>
      </div>
    </div>
    <!-- End -->

    <div v-if="!user.is_emp"  class="main">
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
             Skills
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <div v-for="skill in user.mySkills" :key="skill"
                            ><code>{{ skill }}</code></div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsetwo"
              aria-expanded="true"
              aria-controls="collapsetwo"
            >
             Basic Info
            </button>
          </h2>
          <div
            id="collapsetwo"
            class="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
          
              
                <table>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>:</td>
                            <td>{{ user.name }}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>:</td>
                            <td>{{ user.email }}</td>
                        </tr>
                        <tr>
                            <td>Phone</td>
                            <td>:</td>
                            <td>{{ user.phone_no }}</td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>:</td>
                            <td>{{ user.address }}</td>
                        </tr>
                        <tr>
                            <td>College</td>
                            <td>:</td>
                            <td>{{ user.company }}</td>
                        </tr>
                        <tr>
                            <td>Resume</td>
                            <td>:</td>
                            <td><a :href="user.resume" target="_blank">{{ user.name }}.Resume</a></td>
                        </tr>
                    </tbody>
                </table>
            
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsethree"
              aria-expanded="true"
              aria-controls="collapsethree"
            >
            Bio
            </button>
          </h2>
          <div
            id="collapsethree"
            class="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
            <p>{{ user.bio }}</p>
            
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else  class="main">
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
             Skills
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <div v-for="skill in user.mySkills" :key="skill"
                            ><code>{{ skill }}</code></div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsetwo"
              aria-expanded="true"
              aria-controls="collapsetwo"
            >
             Basic Info
            </button>
          </h2>
          <div
            id="collapsetwo"
            class="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
          
              
                <table>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>:</td>
                            <td>{{ user.name }}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>:</td>
                            <td>{{ user.email }}</td>
                        </tr>
                        <tr>
                            <td>Phone</td>
                            <td>:</td>
                            <td>{{ user.phone_no }}</td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>:</td>
                            <td>{{ user.address }}</td>
                        </tr>
                        <tr>
                            <td>Company</td>
                            <td>:</td>
                            <td>{{ user.company }}</td>
                        </tr>
                        <tr>
                            <td>Resume</td>
                            <td>:</td>
                            <td><a :href="user.resume" target="_blank">{{ user.name }}.Resume</a></td>
                        </tr>
                    </tbody>
                </table>
            
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsethree"
              aria-expanded="true"
              aria-controls="collapsethree"
            >
            Bio
            </button>
          </h2>
          <div
            id="collapsethree"
            class="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
            <p>{{ user.bio }}</p>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name:'userView',
  data(){
      return {
          user:{

          },

      }
  },
  methods:{
       async getUser(){
         try{
          const id = this.$route.params.id;
       
          const response = await axios.get(`https://fa-capstone.onrender.com/user/${id}`);
        
          if(response.data==''){
              this.$router.push({path:'/login'});
          }else{
              this.user = response.data;
          localStorage.setItem('userId',id);
         
          this.$emit('login',id);
          }
         
         }
         catch(err){
          console.log(err);
         }
       },
     
  },
  mounted() {
     this.getUser();
  },
}
</script>



<style scoped>
/* Import Font Dancing Script */
@import url(https://fonts.googleapis.com/css?family=Dancing+Script);

* {
margin: 0;
}

body {
background-color: #e8f5ff;
font-family: Arial;
overflow: hidden;
}

/* NavbarTop */
.navbar-top {
background-color: #fff;
color: #333;
box-shadow: 0px 4px 8px 0px grey;
height: 70px;
}

.title {
font-family: "Dancing Script", cursive;
padding-top: 15px;
position: absolute;
left: 45%;
}

.navbar-top ul {
float: right;
list-style-type: none;
margin: 0;
overflow: hidden;
padding: 18px 50px 0 40px;
}

.navbar-top ul li {
float: left;
}

.navbar-top ul li a {
color: #333;
padding: 14px 16px;
text-align: center;
text-decoration: none;
}

.icon-count {
background-color: #ff0000;
color: #fff;
float: right;
font-size: 11px;
left: -25px;
padding: 2px;
position: relative;
}

/* End */

/* Sidenav */
.sidenav {
/* background-color: #e4e0e1; */
color: #333;
border-bottom-right-radius: 25px;
height: 86%;
left: 0;
overflow-x: hidden;
padding-top: 20px;
position: absolute;
top: 102px;
width: 250px;
}

.profile {
margin-bottom: 20px;
margin-top: -12px;
text-align: center;
}

.profile img {
border-radius: 50%;
box-shadow: 0px 0px 5px 1px grey;
}

.name {
font-size: 20px;
font-weight: bold;
padding-top: 20px;
}

.job {
font-size: 16px;
font-weight: bold;
padding-top: 10px;
}

.url,
hr {
text-align: center;
}

.url hr {
margin-left: 20%;
width: 60%;
}

.url a {
color: #818181;
display: block;
font-size: 20px;
margin: 10px 0;
padding: 6px 8px;
text-decoration: none;
}

.url a:hover,
.url .active {
background-color: #e8f5ff;
border-radius: 28px;
color: #000;
margin-left: 14%;
width: 65%;
}

.main {
margin-top: 2%;
margin-left: 29%;
font-size: 28px;
padding: 0 10px;
width: 58%;

}

.main h2 {
color: #333;
font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
font-size: 24px;
margin-bottom: 10px;
}

.main  table {
border: none;
font-size: 16px;
height: 270px;
width: 80%;
} 
.main table tr{
  height: 2rem !important;
}
.main table td{
  height: 2rem !important;
}
.edit {
position: absolute;
color: #e7e7e8;
right: 14%;
}


.accordion-button {
  background: transparent;
  
}
.accordion-body {
  box-shadow: inset -3px -7px 20px 0px lightgray;
 
}

.accordion-item {
background: transparent !important;
border:1px solid #c5c5c5 !important;
}
.main h2[data-v-43a8f32a] {
  margin-bottom: 0 !important;
}
/* End */
</style>
