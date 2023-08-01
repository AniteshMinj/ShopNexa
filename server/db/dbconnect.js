const mongoose = require("mongoose");
require("dotenv").config();

async function dbConnect(){
    mongoose.connect(
        process.env.DB_URL
    )
    .then(()=>{
        console.log("Succesfully connected to database");
    })
    .catch((error)=>{
        console.log("Unable to connect to database");
        console.log(error);
    })
}

module.exports = dbConnect;