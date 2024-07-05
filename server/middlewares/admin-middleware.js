const adminMiddleware=async(req,res,next)=>{
try {
    console.log(req.user)
    const adminrole=req.user.isAdmin;
    if(!adminrole){
        return res.status(403).json({message:"Acess denied. user is not an admin"})
    }
   next()
    // res.status(200).json({msg:req.user})
} catch (error) {
    next(error)
}
}
module.exports=adminMiddleware;
