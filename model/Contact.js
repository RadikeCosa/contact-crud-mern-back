const { Schema, model } = require("mongoose");

const contactSchema = new Schema(
	{
		name: String,
		surname: String,
		age: Number,
		telephone: Number,
		address: String,
		email: String,
		diagnosis: String,
		financier: String,
	},
	{
		timestamps: true,
	}
);
module.exports = model("Contact", contactSchema);
