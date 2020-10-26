const express = require("express");
const bodyParser = require("body-parser");
var mysql = require("mysql");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var connection = mysql.createConnection({
  host: "35.223.12.195",
  user: "root",
  password: "",
  database: "recipeApp",
});
connection.connect(function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log("Connected");
  }
});

app.get("/hello", (req, res) => {
  res.send({ express: "Hello From Express" });
});

app.get("/getRecipes", (req, res, next) => {
  connection.query("SELECT * FROM recipe", function (error, results, fields) { /* query rettrives all the data from recipe table */
    if (error) throw error; 
    res.json(results); /* converts the data to JSON */
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
