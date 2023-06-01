<template>
    <div class="post-jobs">

<h1>Please post a job for your company</h1>
<form method="post" action="/jobs/postjob">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Title</label>
      <input type="text" name="title" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
   
    </div>
    <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Company_name</label>
        <input type="text" name="company_name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      </div>
    <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label"> job_type</label>
        <input type="text" name="job_type" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
        <label for="phone" class="form-label">openings</label>
        <input type="number" name="openings" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">start_date</label>
      <input type="text" name="start_date" class="form-control" id="exampleInputPassword1">
    </div>
    <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">location</label>
        <input type="text" name="location" class="form-control" id="exampleInputPassword1">
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">experience</label>
        <input type="text" name="exprience" class="form-control" id="exampleInputPassword1">
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Salary</label>
        <input type="text" name="salary" class="form-control" id="exampleInputPassword1">
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">probation_duration</label>
        <input type="text" name="probation_duration" class="form-control" id="exampleInputPassword1">
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">mandatory_skills</label>
        <input type="text" name="mandatory_skills" class="form-control" id="exampleInputPassword1">
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">about_job</label>
        <input type="text" name="about_job" class="form-control" id="exampleInputPassword1">
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">last_date</label>
        <input type="text" name="last_date" class="form-control" id="exampleInputPassword1">
      </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>



    </div>
</template>

<style scoped>
 .post-jobs{
  padding: 20px 100px;
 }
</style>