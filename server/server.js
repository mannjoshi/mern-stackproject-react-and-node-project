require("dotenv").config();
const express = require("express");
const app = express();
const authRouter = require("./router/auth-router");
const contactRoute=require("./router/contact-router");
const serviceRoute=require("./router/service-router")
const connectDb = require("./utils/db");
const cors= require("cors")

const errorMiddleware= require("./middlewares/error-middleware");
//get request first argument location of page
//for parsing

const corsOption={
  origin:"http://localhost:5173",
  method:"GET,POST,PUT,DELETE,PATCH,HEAD",
  credential:true,
}




app.use(cors(corsOption));
app.use(express.json());

//to mount
app.use("/api/auth", authRouter);
app.use("/api/form",contactRoute);
app.use("/api/data",serviceRoute);

app.use(errorMiddleware);
connectDb.dbConnection();
//to start the server implement the listen method
const port = 5000;

  app.listen(port, () => {
    console.log(`server is running on the port ${port}`);
  });

