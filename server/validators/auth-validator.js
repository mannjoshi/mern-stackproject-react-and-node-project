const {z}=require("zod");


const loginschema=z.object({

    email: z.string({required_error:"email required"}).trim().email({message:"Invalid email"}).
    min(3,{
        message:"Email must be at least 3 charater"
    }). max(255,{
        message:"Email must be less than 255 charater"
    }),
    password: z.string({required_error:"Password must be entered "}).trim().
    min(7,{
        message:"password must be at least 7 charater"
    }). max(1024,{
        message:"password  must be less than 255 charater"
    }),
})

const signupSchema=loginschema.extend({
    username: z.
    string({required_error:"Name is required"})
    .trim()
    .min(3,{message:"Name must be at least 3 charater"})
    .max(255,{message:"Name must be less than 255 charater" }),

    
    phone: z.string({required_error:"Phone number is required"}).trim().
    min(10,{
        message:"Phone number must be at least 10 digit"
    }). max(20,{
        message:"Phone number must be less than 255 charater"
    }),
   
})



module.exports={signupSchema,loginschema};