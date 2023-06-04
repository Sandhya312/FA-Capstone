<template>
  <div class="applicants">
    <h1>Applicants</h1>

    <div class="container d-flex justify-content-start">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Resume</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in appliedUsers" :key="user._id">
            <th scope="row">{{ counter++ }}</th>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.phone_no }}</td>
            <td>
              <a :href="user.resume" target="_blank">{{ user.name }}.Resume</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AppliedUserView",
  data() {
    return {
      appliedUsers: [],
      counter:0,
    };
  },
  methods: {
    async getAppliedUsers() {
      try {
        const id = this.$route.params.id;
        const response = await axios.get(
          `https://fa-capstone.onrender.com/jobs/${id}/appliedUsers`
        );

        this.appliedUsers = response.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
  mounted() {
    this.getAppliedUsers();
  },
};
</script>

<style scoped>
.applicants{
    padding: 2% !important;
}

h6 {
  margin-bottom: 20px !important;
}
</style>
