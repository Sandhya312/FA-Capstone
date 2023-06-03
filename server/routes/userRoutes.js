const express = require("express");
const router= express.Router();
const validateToken = require('../middleware/validateTokenHandle')
const {userProfile,appliedJobs,updateUserProfile,userRegister,editLoad,logout,verifyMail,UserLogin,deleteUserDetails,allUsers,loadRegister,loadLogin,myJobs} = require('../controllers/userController');
const {isLogin,isLogout} = require("../middleware/auth");

router.get('/',allUsers);
router.get('/register',loadRegister);
router.get('/verify',verifyMail);
router.get('/login',loadLogin);
router.get('/logout',logout);
router.get('/edit',editLoad);
router.get('/:id/applied',appliedJobs);
router.get('/:id/myjobs',myJobs);
router.get('/:id',userProfile);
router.post('/register',userRegister);
router.post('/login',UserLogin);
router.patch('/:id/edit',updateUserProfile);
router.delete('/:id',deleteUserDetails);

module.exports = router;