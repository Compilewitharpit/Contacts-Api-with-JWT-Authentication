const asyncHandler = require("express-async-handler")
const Contacts = require("../models/contactModel")

// const newContact = Contacts.create({
//     name: "John Doe",
//     email: "johndoe@example.com",
//     phone_number: "1234567890"
// });

const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contacts.find({user_id: req.user.id});
    res.status(200).json(contacts);
});

const createContacts = asyncHandler(async (req, res) => {
    const {name, email, phone_number} = req.body;
    if(!name || !phone_number || !email){
        throw new Error("Mandatory fields missing");
    }
    console.log("The required contact body is", req.body)
    const contact = await Contacts.create({
        name,
        email,
        phone_number,
        user_id: req.user.id
    });
    res.status(201).json({contact});
})

const getContactAt = asyncHandler(async (req, res) => {
    const contact = await Contacts.findById(req.params.id)
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact)
});

const updateContact = asyncHandler(async (req, res) => {
    const contact = await Contacts.findById(req.params.id)
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    if(contact.user_id.toString() !== req.params.id){
        res.status(403)
        throw new error("User dosen't have permission for altering this contact")
    }
    const updatedContact = await Contacts.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new : true}
    )
    res.status(200).json(updateContact);
})

const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contacts.findById(req.params.id)
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    await Contacts.findByIdAndDelete(req.params.id);
    res.status(200).json(contact);
})

module.exports = {
    getContacts,
    createContacts,
    getContactAt,
    updateContact,
    deleteContact
}