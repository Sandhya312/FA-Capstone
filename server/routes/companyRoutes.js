const express = require("express");
const router = express.Router();
const {registerCompany,loginCompany,jobPage,registeredCompany,CompanyPage,updateCompanyDetail,deleteComapnyDetails} = require('../controllers/companyController');

router.get('/admin',registeredCompany);
router.get('/jobs/:id',jobPage);
router.get('/:id',CompanyPage);
router.post('/register',registerCompany);
router.post('/login',loginCompany);
router.patch('/:id',updateCompanyDetail);
router.delete('/:id',deleteComapnyDetails);

module.exports = router;
