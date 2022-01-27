const express = require("express");
const cors = require("cors");
const app = express();

// Config
app.set("port", process.env.PORT || 4000);

//middlewares
app.use(cors());
app.use(express.json());

//rutas

app.get("/", (req, res) => {
	res.send("Welcome To The Jungle");
});

app.use("/api/contacts", require("./routes/contact"));

module.exports = app;
