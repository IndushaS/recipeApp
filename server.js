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
  password: "msci342",
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

//Display recipes on explore page UPDATED
app.get("/getRecipes", (req, res, next) => {
  connection.query("Select recipe.recipeName, recipe.img, GROUP_CONCAT(ingredients.name) as ingredients, recipe.recipeInstruction From recipeApp.recipe_ingredients Join recipeApp.recipe On recipe_ingredients.idrecipe = recipe.idrecipe Join recipeApp.ingredients On recipe_ingredients.recipe_ingredient = ingredients.idingredient GROUP BY recipe.recipeName, recipe.img, recipe.recipeInstruction ", function (error, results, fields) {
    if (error) throw error;
    res.json(results);
  });
});

app.get('/api/addRecipe', (req, res) => {
  const {idrecipe, recipeName, img, recipeInstruction} = req.query;
  const Insert_Recipe = "INSERT INTO recipe (idrecipe, recipeName, img, recipeInstruction) VALUES ('" + idrecipe + "','" + recipeName + "','" + img + "','" + recipeInstruction + "')";
  connection.query(Insert_Recipe, (err, results) => {
    if (err) {
      return res.send(err)
    }
    else {
      return res.send('successfully added recipe')
    }
  })
})

//API call for saved recipes
app.get('/api/saved_recipes', (req, res) => {
  const {iduser} = req.query;
  const Saved_Recipes = "Select recipe.recipeName as recipeName, recipe.img as image From recipeApp.saved_recipe Join recipeApp.user On saved_recipe.id_user = user.iduser Join recipeApp.recipe On saved_recipe.recipe_saved = recipe.idrecipe Where iduser ="+ iduser ;
  connection.query(Saved_Recipes, (err, results) => {
    if (err) {
      return res.send(err)
    }
    else {
      return res.json(results);
    }
  })
})

//API call for created recipes
app.get('/api/created_recipes', (req, res) => {
  const {iduser} = req.query;
  const Created_Recipes = "Select recipe.recipeName as recipeName, recipe.img as image From recipeApp.created_recipe Join recipeApp.user On created_recipe.userid = user.iduser Join recipeApp.recipe On created_recipe.recipe_created = recipe.idrecipe Where iduser ="+ iduser ;
  connection.query(Created_Recipes, (err, results) => {
    if (err) {
      return res.send(err)
    }
    else {
      return res.json(results);
    }
  })
})

app.listen(port, () => console.log(`Listening on port ${port}`));
