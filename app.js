const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/formDB", {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

const formSchema = {
	fname: String,
	lname: String,
	email: String,
	phone: Number,
	city: String,
	servicesType: String,
	serviceSelected: String
};

const Form = mongoose.model("Form", formSchema);

app.get("/", function(req, res) {
	res.render("home");
});

app.get("/aboutus", function(req, res) {
	res.render("aboutus");
});

app.get("/services", function(req, res) {
	res.render("services");
});

app.get("/services/designing", function(req, res) {
	res.render("designing");
});

app.get("/services/marketing", function(req, res) {
	res.render("marketing");
});

app.get("/services/printing", function(req, res) {
	res.render("printing");
});

app.post("/post", function(req, res) {});

app.listen(3000, function(req, res) {
	console.log("Server started on port 3000");
});
