require("dotenv").config();

const app = require("./app");
require("./database");

// run server

async function main() {
	await app.listen(app.get("port"));
	console.log("server running on port", app.get("port"));
}
main();
