const mongoose = require("mongoose")

const contactSchema = mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        required : true,
        ref : "User"
    },
    name:{
        type: String,
        required : true
    },
    email :{
        type: String,
        required : true
    },
    phone_number:{
        type: String,
        required : true
    }
    },
    {
        timestamps: true
    }
);

const Contacts = mongoose.model("Contacts", contactSchema)

module.exports = Contacts;