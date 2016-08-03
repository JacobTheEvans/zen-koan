import express from "express";
import bodyParser from "body-parser";
import path from "require";
import model from "./models/story.js";

//base app
let app = express();

//setup JSON requests
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

//setup public facing files
app.use(express.static(path.join(__dirname + "/public")));
app.set("views", __dirname + "/public/views");

//setup view engine
app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.render("index.html");
});

app.listen(8080);

export default app;
