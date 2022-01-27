const { Router } = require("express");
const { put } = require("../app");
const router = Router();

const {
	createContact,
	getContacts,
	getContact,
	updateContact,
	deleteContact,
} = require("../controller/contact.controller");

router.route("/").get(getContacts).post(createContact);

router.route("/:id").get(getContact).delete(deleteContact).put(updateContact);

module.exports = router;
