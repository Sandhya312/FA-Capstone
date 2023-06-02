
const isLogin = async(req,res,next)=>{
 
    try{
        console.log(req.session.user_id,"session id");
        if(req.session.user_id){
        
        }else{
          
            res.redirect('/user/login');
            return;
        }
        next();
    }
    catch(err){
        console.log(err);
    }
}

const isLogout = async(req,res,next)=>{
    try{
        if(req.session.user_id){
            res.redirect('/user/'+req.session.user_id)
        }
        next();
    }
    catch(err){
        console.log(err);
    }
}


module.exports ={
    isLogin,isLogout
}