const express = require('express');

const router = express.Router();
const {allJobs,jobPage,createPost,updateJob,deleteJob,applyJob,postJob,jobAppliedUsers}= require("../controllers/jobsController");

router.get('/',allJobs);
router.get('/postjob',postJob);
router.get('/:id',jobPage);
router.get('/:id/appliedUsers',jobAppliedUsers);
router.post('/postjob',createPost);
router.patch('/:id',updateJob);
router.post('/:id/apply',applyJob);
router.delete('/:id',deleteJob);

module.exports = router;