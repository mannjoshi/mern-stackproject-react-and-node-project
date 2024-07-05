//application model and intercat with the model for the incoming request from the router help to orgainze
const User=require("../models/user-model");
const bcrypt=require("bcryptjs");

const home= async(req,res)=>{
    try{
     res.status(200).send("Welcome to the ");

    }catch(error){
        console.log(error);
    }

};

const register= async(req,res)=>{
    try{
        // console.log(req.body);
        const {username,email,phonenumber,password}=req.body;

        const userExist= await User.findOne({email});
        if(userExist){
            return res.status(400).json({message : "email already exit"});
        }


        
        const userCreated=await User.create({
            username,
            email,
            phonenumber,
            password});

    res.status(201).json({msg:"Registration Successful",
        token: await userCreated.generateToken(),
        userID:userCreated._id.toString()});
    }
    catch(error){
        console.log(error)
    }
};


//login;
const login = async (req,res) => {

    try {
       const {email,password}=req.body;

       const userExist =await User.findOne({ email });

       if(!userExist){
        return res.status(400).json({message:"INvalid user"});
       }

       //const user= await bcrypt.compare(password,userExist.password);

       const user= await userExist.comparePassword(password);

       if(user){
        res.status(200).json({msg:"Login Successful",
        token: await userExist.generateToken(),
        userID:userExist.toString()});
       }
       else{
        res.status(401).json("INvalid email or password")
       }

    } catch (error) {
        // res.status(500).json("internal server error")
        next(error)
    }

}


//user logic to send user data;

const user=async (req,res)=>{
try {
    const userData=req.user;
    console.log(userData);
    return res.status(200).json({userData});
} catch (error) {
    console.log("error from the user route")
    
}
}

module.exports={home,register,login,user};