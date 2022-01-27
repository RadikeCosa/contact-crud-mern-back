const contactCtrl = {};

const Contact = require("../model/Contact");

contactCtrl.getContacts = async (req, res) => {
	const contacts = await Contact.find();
	res.json(contacts);
};
contactCtrl.createContact = async (req, res) => {
	const {
		name,
		surname,
		age,
		telephone,
		address,
		email,
		diagnosis,
		financier,
		
	} = req.body;
	const newContact = new Contact({
		name: name,
		surname: surname,
		age: age,
		telephone: telephone,
		address: address,
		email: email,
		diagnosis: diagnosis,
		financier: financier,
		
	});
	await newContact.save();
	res.json("el usuario ha sido creado");
};
contactCtrl.getContact = async (req, res) => {
	const contact = await Contact.findById(req.params.id);
	res.json(contact);
};
contactCtrl.updateContact = async (req, res) => {
	const {
		name,
		surname,
		age,
		telephone,
		address,
		email,
		diagnosis,
		financier,
		active,
	} = req.body;
	await Contact.findByIdAndUpdate(req.params.id, {
		name,
		surname,
		age,
		telephone,
		address,
		email,
		diagnosis,
		financier,
		active,
	});
	res.json("contact updated");
};
contactCtrl.deleteContact = async (req, res) => {
	await Contact.findByIdAndDelete(req.params.id);
	res.json("el usuario ha sido eliminado");
};
module.exports = contactCtrl;
