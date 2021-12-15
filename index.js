const bodyParser = require("body-parser");
const express = require("express");
var cors = require('cors')
var postController = require("./controllers/post");

// Defining App and enable CORS Requests
const app = express();
app.use(cors());
const Router = express.Router();
const port = 3000;

// DataBase
const db = require("./db");
let connection = db.connect();

// Connect to MongoDB
db.connect;

// Access to the parsed POST data
app.use(express.urlencoded({ extended: true }));

// Making styles folder public
app.use(express.static("styles"));

// Pug as view engine
app.set("view engine", "pug");
app.set("views", "./views");

// Parsing the body of the post request
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.get("/paste", (req, res) => {
  postController.paste(req, res);
});

app.get("/:id", (req, res) => {
  postController.list(req, res);
});

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});
