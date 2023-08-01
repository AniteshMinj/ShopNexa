const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    email:{
        type: String,
        required: [true, "Please Provide an Email"],
        unique: [true, "Email Exist"],
    },
    password:{
        type: String,
        required: [true, "Please Provide a Password"],
        unique: false,
    }
});

module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);