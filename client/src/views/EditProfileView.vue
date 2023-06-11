<template>
    <div class="edit">
      <h1>Edit Your Profile</h1>
      <div class="edit-profile">
        <div class="about edit-section">
          <div class="heading-para">
            <h4>About</h4>
            <small>Tell us about yourself so companies know who you are</small>
          </div>
          <div class="section">
            <form  @submit.prevent="editProfile()" action="">
              <div class="name">
                <label for="Your Name">Your Name</label>
                <input type="text" v-model="user.name" name="name" id="name" />
              </div>
              <div class="country">
                <label for="country" class="country-label"
                  >Where are you based?</label
                >
                <input
                  type="text"
                  v-model="user.address"
                  name="country"
                  id="country"
                />
              </div>
              <div class="tagline">
                <label for="tagline">Select your primary role</label>
                <select
                  class="form-select"
                  v-model="user.my_taglines"
                  aria-label="Default select example"
                >
                  <option value="Software Engineer">Software Engineer</option>
                  <option value="Full-Stack Developer">
                    Full-Stack Developer
                  </option>
                  <option value="Frontend Developer">Frontend Developer</option>
                  <option value="Backend Developer">Backend Developer</option>
                  <option value="Mobile Developer">Mobile Developer</option>
                  <option value="iOS Developer">iOS Developer</option>
                  <option value="DevOps Developer">DevOps Developer</option>
                  <option value="Security Engineer">Security Engineer</option>
                  <option value="Data Engineer">Data Engineer</option>
                  <option value="UI/UX Designer">UI/UX Designer</option>
                  <option value="Graphic Designer">Graphic Designer</option>
                </select>
              </div>
              <div class="bio">
                <label for="bio">Your bio</label>
                <textarea
                  name=""
                  id="bio"
                  cols="70"
                  v-model="user.bio"
                  rows="10"
                ></textarea>
              </div>
              <button type="submit" class="btn">Save</button>
            </form>
          </div>
          <hr />
        </div>
        <hr>
        <div class="resume edit-section">
          <div class="heading-para">
            <h4>Upload your recent resume or CV</h4>
            <small>Please insert google drive link</small>
          </div>
          <div class="section">
            <form  @submit.prevent="editProfile()" action="">
              <div>
                <label for="">Upload your resume link </label>
                <input
                  type="text"
                  name="resume"
                  id="resume"
                  v-model="user.resume"
                />
              </div>
              <button type="submit" class="btn">Save</button>
            </form>
          </div>
        </div>
        <hr>
        <div class="education edit-section">
          <div v-if="!user.is_emp" class="heading-para">
            <h4>Education</h4>
            <small>What schools have you studied at?</small>
          </div>
          <div v-else class="heading-para">
            <h4>Company</h4>
            <small>Where are you working?</small>
          </div>
          <div class="section">
            <form  @submit.prevent="editProfile()" action="">
              <div>
                <label for="college" v-if="!user.is_emp">Education</label>
                <label for="college" v-else>Company</label>
                <input type="text" name="company" id="" v-model="user.company" />
              </div>
              <button type="submit" class="btn">Save</button>
            </form>
          </div>
        </div>
        <hr>
        <div class="your-skills edit-section">
          <div class="heading-para">
            <h4>Your Skills</h4>
            <small>This will help companies hone in on your strengths.</small>
          </div>
          <div class="section">
            <form  @submit.prevent="editProfile()" action="">
              <div>
                <label for="college">Skills</label>
                <input type="text" name="company" id="" v-model="user.mySkills" />
              </div>
              <button type="submit" class="btn">Save</button>
            </form>
          </div>
        </div>
        <hr>
        <div class="identity edit-section">
          <div class="heading-para">
            <h4>Identity</h4>
            <small
              >We’re committed to helping companies hire in a more inclusive way.
              Part of that includes asking candidates to share demographic
              information so we can help recruiters understand and build their
              pipeline. Self identifying is completely optional, and we'll handle
              your information with care. Your responses to gender and ethnicity
              will not be displayed on your profile, and displaying your pronouns
              is optional.</small
            >
          </div>
          <div class="section">
            <form  @submit.prevent="editProfile()" action="">
              <div>
                <label for="tagline">Pronouns</label>
                <select
                  class="form-select"
                  v-model="user.pronoun"
                  aria-label="Default select example"
                >
                  <option value="He/Him">He/Him</option>
                  <option value="She/Her">She/Her</option>
                  <option value="They/Them">They/Them</option>
                  <option value="Self-Describe">Self-Describe</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
              </div>
              <div>
                <label for="tagline">Gender Identity</label>
                <select
                  class="form-select"
                  v-model="user.gender"
                  aria-label="Default select example"
                >
                  <option value="Man">Man</option>
                  <option value="Woman">Woman</option>
                  <option value="Non-Binary">Non-Binary</option>
                  <option value="Self-Describe">Self-Describe</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
              </div>
              <button type="submit" class="btn">Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  export default {
    name: "EditProfileView",
    data() {
      return {
        user: {},
        id:this.$route.params.id,
      };
    },
    methods: {
      async getUser() {
        try {
          const id = this.id
          const response = await axios.get(`/user/${id}`);
          this.user = response.data;
      
        } catch (err) {
          console.log(err);
        }
      },
      async editProfile(){
        try{
          
          const id  = this.id
          const res = await axios.patch(`/user/${id}/edit`,
          this.user);
          console.log("this is response",res);
          console.log("this is user",this.user);
        }
        catch(err){
          console.log(err);
        }
      }
    },
    mounted() {
      this.getUser();
    },
  };
  </script>
  
  <style scoped>
  .edit {
    height: auto;
  }
  .edit>h1{
    margin-left: 50px;
  }
  .edit-profile {
    height: auto;
    border: 1px solid gray;
    border-radius: 10px;
    padding: 20px;
    margin: 50px;
  }
  small {
    color: #717584;
    font-size: 14px;
    line-height: 20px;
    margin-top: 8px;
  }
  .edit-section {
    display: flex;
    padding: 10px;
  }
  .edit-section > div {
    padding: 20px;
  }
  label {
    margin-bottom: 10px !important;
  }
  .edit-section .heading-para {
    width: 30%;
  }
  .edit-section .section {
    width: 70%;
  }
  .edit-section .section form div {
    display: flex;
    flex-direction: column;
    height: 5rem;
    justify-content: space-around;
    margin-bottom: 20px;
    padding: 1%;
  }
  .edit-section .section div input,
  select {
    background: transparent;
    border: 1px solid gray;
    border-radius: 3px;
    height: 5rem;
    padding: 10px;
  }
  .edit-section .section .bio {
    height: auto !important;
  }
  .form-select {
    background-color: transparent !important;
    border: 1px solid gray !important;
  }
  textarea {
    height: 10rem;
    background: transparent;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 10px;
    outline: none;
  }
  .edit-section .section button {
    border: 1px solid gray;
    width: 10rem;
    height: 3rem;
  }
  </style>
  