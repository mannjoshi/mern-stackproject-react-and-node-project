const express=require("express");
const router=express.Router();
const authcontroller = require("../controllers/auth-controller");
const authMiddleware=require("../middlewares/auth-middleware");

const {signupSchema,loginschema}=require("../validators/auth-validator");
const validate =require("../middlewares/validate-middleware");
const loginValidator=require("../validators/login-validator");
const validate2=require("../middlewares/login-middleware");

    router.route("/").get(authcontroller.home);

    router.route("/reg").post( validate(signupSchema), authcontroller.register);
    router.route("/login").post(validate(loginschema),authcontroller.login);


    // app.get("/register",(req,res)=>{
    //     res.status(200).send("Welcome to the registeration page of the Texmex Instrument  ");
    //     });
    router.route("/user").get(authMiddleware,authcontroller.user);

module.exports = router;