import express from "express";
import bodyParser from "body-parser";
import path from "path";
import ejs from "ejs";
import pg from "pg";

//database setup
var conString = "postgresql://postgres:scraper@localhost/scraper";
var client = new pg.Client(conString);
client.connect();

//base app
let app = express();

//setup JSON requests
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

//setup public facing files
app.use(express.static(path.join("./public")));
app.set("views", "./public/views");

//setup view engine
app.engine("html", ejs.renderFile);
app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.render("index.html");
});

app.get("/stories", function(req, res) {
  var query = client.query("SELECT * FROM koan");
  var returnData = [];
  query.on("row", function(row) {
    returnData.push(row);
  });
  query.on("end", function() {
    res.status(200).send(returnData);
  })
});

app.listen(8080);

export default app;
