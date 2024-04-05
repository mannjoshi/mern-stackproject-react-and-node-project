const {z}=require("zod");

const loginValidator=z.object({
     
    username: z.string().min(1,{required_error:"username is not entered "}),
    password: z.string().min(1,{required_error:"password is not entered "}),

});

module.exports=loginValidator;