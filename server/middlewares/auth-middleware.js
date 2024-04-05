const jwt=require("jsonwebtoken");
const User=require("../models/user-model")

const authMiddleware=async(req,res,next)=>{
const token=req.header('Authorization');
if(!token){
    return res.status(401).json({message:"unathorized Http,token not provide"});
}


const jwttoken=token.replace("Bearer","").trim();
console.log("token from auth middle ware",token);
try {
    const isverified=jwt.verify(jwttoken,process.env.JWT_SECRET_KEY);
    console.log(isverified);

    const userData =await User.findOne({email:isverified.email}).select({password:0,});
    console.log(userData)


    req.user=userData;
    req.token=token;
    req.userID=userData._id;
    next();

} catch (error) {
    return res.status(401).json({message:"unathorized Http,token not provide here"});
}
};

module.exports=authMiddleware;