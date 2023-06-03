const express = require("express");
const router= express.Router();
const validateToken = require('../middleware/validateTokenHandle')
const {userProfile,appliedJobs,updateUserProfile,userRegister,editLoad,logout,verifyMail,UserLogin,deleteUserDetails,allUsers,loadRegister,loadLogin,myJobs} = require('../controllers/userController');
const {isLogin,isLogout} = require("../middleware/auth");

router.get('/',allUsers);
router.get('/register',isLogout,loadRegister);
router.get('/verify',verifyMail);
router.get('/login',isLogout,loadLogin);
router.get('/logout',isLogin,logout);
router.get('/edit',isLogin,editLoad);
router.get('/:id/applied',isLogin,appliedJobs);
router.get('/:id/myjobs',isLogin,myJobs);
router.get('/:id',userProfile);
router.post('/register',userRegister);
router.post('/login',UserLogin);
router.patch('/:id/edit',updateUserProfile);
router.delete('/:id',deleteUserDetails);

module.exports = router;