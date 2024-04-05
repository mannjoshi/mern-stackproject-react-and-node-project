const validate2=(schema)=>async(req,res,next)=>{

    try {
        const parseBody=await schema.parseAsync(req.body);
        req.body=parseBody;
        next();
    } catch (err) {
        const status=430;
        const message="Fill the input properly please 2 ";
        const extradetails=err.errors[0].message;

        // res.status(400).json({msg:message});
        const error={
            status,message,extradetails,
        }
        next(error)
    }

};
module.exports=validate2;