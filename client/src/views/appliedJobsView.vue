<template>
  <div class="applied-jobs">
    <h1>Applied job page</h1>
    <div class="job-container">
      <div class="job-card" v-for="job in appliedJobs" :key="job._id">
        <div class="rectangle">
          <h4>{{ job.title }}</h4>
          <small>{{ job.company_name }}</small>
          <div class="job-frame">
            <div class="frame stipend-frame">
              <p class="frame-heading">Salary</p>
              <p class="frame-amount">{{ job.salary }}</p>
            </div>
            <div class="frame location-frame">
              <p class="frame-heading">Location</p>
              <p class="frame-amount">{{ job.location }}</p>
            </div>
            <div class="frame duration-frame">
              <p class="frame-heading">Probation Duration</p>
              <p class="frame-amount">{{ job.probation_duration }}</p>
            </div>
            <div class="frame apply-frame">
              <p class="frame-heading">Openings</p>
              <p class="frame-amount">{{ job.openings }}</p>
            </div>
          </div>
          <h4 class="job-desc-heading">Job Description</h4>
          <p class="job-desc-para">{{ job.about_job.substring(0, 100) }}..</p>
          <form :action="`/jobs/${job._id}`" method="get">
            <button class="view-details" type="submit">
              <p>View Details</p>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "jobsView",
  data() {
    return {
      appliedJobs: [],
    };
  },
  methods: {
    async getAppliedJobs() {
      try {
        const id = this.$route.params.id;
        const response = await axios.get(
          `https://fa-capstone.onrender.com/user/${id}/applied`
        );

        this.appliedJobs = response.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
  created() {
    this.getAppliedJobs();
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.applied-jobs {
  height: auto;
  padding: 2%;
}
.job-container {
  width: 100%;
  position: relative;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 3%;
  padding-bottom: 2%;
  height: auto;
}
.job-card {
  position: relative;
  width: 628px;
  height: 380px;
  top: 40px;
}
.job-card .rectangle {
  box-sizing: border-box;
  width: 628px;
  height: 380px;
  border: 2px solid #b5b2b2;
  border-radius: 12px;
}
.job-card h4 {
  position: absolute;
  width: 230px;
  height: 24px;
  left: 25px;
  top: 30px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
}
.job-card small {
  position: absolute;
  width: 210px;
  height: 20px;
  left: 25px;
  top: 54px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #484848;
}
.job-card .job-frame {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 24px;
  gap: 77px;
  position: absolute;
  width: 580px;
  height: 80px;
  left: 25px;
  top: 92px;
  background: #f4f4f4;
  border-radius: 8px;
}
.job-card .job-frame .frame {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 8px;
  width: 99px;
  height: 44px;
  flex: none;
  order: 0;
  flex-grow: 0;
}
.job-card .job-frame .location-frame {
  width: 53px;
  order: 1;
}
.job-card .job-frame .duration-frame {
  width: 66px;
  order: 2;
}
.job-card .job-frame .apply-frame {
  width: 77px;
  order: 3;
}
.job-card .job-frame .frame-heading {
  width: 112px;
  height: 16px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.02em;
  color: #787878;
  flex: none;
  order: 0;
  flex-grow: 0;
}
.job-card .job-frame .frame-amount {
  width: 99px;
  height: 20px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.02em;
  color: #161616;
  flex: none;
  order: 1;
  flex-grow: 0;
}
.job-card .job-desc-heading {
  position: absolute;
  width: 106px;
  height: 20px;
  left: 25px;
  top: 200px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
}
.job-card .job-desc-para {
  position: absolute;
  width: 580px;
  height: 80px;
  left: 25px;
  top: 233px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #484848;
}
.job-card .view-details {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 10px;
  position: absolute;
  width: 115px;
  height: 40px;
  left: 25px;
  top: 322px;
  background: #484848;
  border-radius: 8px;
  border: none;
  outline: none;
}
.job-card .view-details p {
  width: 83px;
  height: 24px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #ffffff;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin-bottom: 0;
}
</style>
