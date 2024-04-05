// const mongoose = require("mongoose");

// const URI = "mongodb://localhost:27017";
// // const URI = process.env.MONGODB_URI;

// const connectDb = async () => {
//   try {
//     await mongoose.connect(URI);
//     console.log("connection succesfull");
//   } catch (error) {
//     console.error("database connecion fail");
//     process.exit(0);
//   }
// };
// module.exports = connectDb;
const mongoose = require("mongoose");
require("dotenv").config();
exports.dbConnection = async () => { 
  try {
    const connectDb = await mongoose
      .connect(process.env.MONGODB_URI)
      .then(() => {
        console.log("Database Connected");
      })
      .catch((err) => {
        console.error(err + "Can not connect");
      });
  } catch (error) {
    console.error(error + "");
  }
};
