const User= require("../models/user-model")

const Contact=require("../models/contact-model")
const getAllUser= async(req,res)=>{
try {
    const users=await User.find({},{password:0});
    console.log(users);
    if(!users || users.length === 0){
        return res.status(404).json({message:"no user found"})
    }
    return res.status(200).json(users);
     
} catch (error) {
    next(error);
}
};
//updating the user

const updateUserById=async(req,res)=>{
    try {
        const id=req.params.id;
        const data=req.body;
        const updateUser=await User.updateOne({_id:id},{
            $set:data,
        });
        return res.status(200).json(data);
    } catch (error) {
        next(error);
    }
}

//getting single user data
const getUserById=async(req,res)=>{
    try {
        const id= req.params.id;
        const data=await User.findOne({_id:id},{password:0})
        return res.status(200).json(data);
        
    } catch (error) {
        console.log(error);
    }
    }
//deleteing the contact
const deleteContactById=async(req,res)=>{
    try {
        const id= req.params.id;
        await Contact.deleteOne({_id:id});
        return res.status(200).json({message:"Contact deleted successfully"});
        
    } catch (error) {

        next(error);
    }
    }


//delete by id
const deleteUserById=async(req,res)=>{
try {
    const id= req.params.id;
    await User.deleteOne({_id:id})
    return res.status(200).json({message:"user deleted successfully"});
    
} catch (error) {
    console.log(error);
}
}

const getAllcontacts= async(req,res)=>{
try {
    const contact =await Contact.find();
    if(!contact || contact.length ===0){
        return res.status(404).json({message:"No user found"});
    }
    return res.status(200).json(contact)

} catch (error) {
  next(error)  
}
}

module.exports={getAllUser,getAllcontacts,deleteUserById,getUserById,updateUserById,deleteContactById};
