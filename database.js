const mongoose = require("mongoose");

// conection
const URI = process.env.MONGO_URI
	? process.env.MONGO_URI
	: "mongodb://localhost/dbtest";

mongoose.connect(URI);
const connection = mongoose.connection;

connection.once("open", () => {
	console.log("database connected");
});
