const express = require("express")
const router = express.Router();
const {getContacts, createContacts, getContactAt, updateContact, deleteContact} = require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken)

router.route("/").get(getContacts)

router.route("/").post(createContacts)

router.route("/:id").get(getContactAt)

router.route("/:id").put(updateContact)

router.route("/:id").delete(deleteContact)

module.exports = router;