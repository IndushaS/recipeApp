const express = require("express");
const bodyParser = require("body-parser");
var mysql = require("mysql");
const app = express();

const port = process.env.PORT || 5000;
const recommend = require('collaborative-filter');

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
  connection.query("Select recipe.idrecipe, recipe.recipeName, recipe.imgURL, GROUP_CONCAT(ingredients.name) as ingredients, recipe.recipeInstruction From recipeApp.recipe_ingredients Join recipeApp.recipe On recipe_ingredients.idrecipe = recipe.idrecipe Join recipeApp.ingredients On recipe_ingredients.recipe_ingredient = ingredients.idingredient GROUP BY recipe.idrecipe, recipe.recipeName, recipe.imgURL, recipe.recipeInstruction ", function (error, results, fields) {
    if (error) throw error;
    res.json(results);
  });
});

app.get('/api/addRecipe', (req, res) => {
  const { idrecipe, recipeName, imgURL, recipeInstruction } = req.query;
  const Insert_Recipe = "INSERT INTO recipe (idrecipe, recipeName, imgURL, recipeInstruction) VALUES ('" + idrecipe + "','" + recipeName + "','" + imgURL + "','" + recipeInstruction + "')";
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
  const { iduser } = req.query;
  const Saved_Recipes = "Select recipe.recipeName as recipeName, recipe.imgURL as image From recipeApp.saved_recipe Join recipeApp.user On saved_recipe.id_user = user.iduser Join recipeApp.recipe On saved_recipe.recipe_saved = recipe.idrecipe Where iduser =" + iduser;
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
  const { iduser } = req.query;
  const Created_Recipes = "Select recipe.recipeName as recipeName, recipe.imgURL as image From recipeApp.created_recipe Join recipeApp.user On created_recipe.userid = user.iduser Join recipeApp.recipe On created_recipe.recipe_created = recipe.idrecipe Where iduser =" + iduser;
  connection.query(Created_Recipes, (err, results) => {
    if (err) {
      return res.send(err)
    }
    else {
      return res.json(results);
    }
  })
})

//API call for like button
app.get('/api/like_button', (req, res) => {
  const {  idrecipe, iduser } = req.query;
  const Like_button = "INSERT INTO `recipeApp`.`user_rating` (recipe_id, user_id, rating) VALUES ('" + idrecipe + "','" + iduser + "','1') ON DUPLICATE KEY UPDATE user_rating.rating = '1'";
  connection.query(Like_button, (err, results) => {
    if (err) {
      return res.send(err)
    }
    else {
      return res.json(results);
    }
  })
})

//API call for unlike button
app.get('/api/unlike_button', (req, res) => {
  const {  idrecipe, iduser } = req.query;
  const Unlike_button = "INSERT INTO `recipeApp`.`user_rating` (recipe_id, user_id, rating) VALUES ('" + idrecipe + "','" + iduser + "','0') ON DUPLICATE KEY UPDATE user_rating.rating = '0'";
  connection.query(Unlike_button, (err, results) => {
    if (err) {
      return res.send(err)
    }
    else {
      return res.json(results);
    }
  })
})


//API call for recipe likes
app.get('/api/recipe_likes', (req, res) => {
  const { idrecipe } = req.query;
  const Recipe_Likes = "SELECT user_rating.recipe_id, SUM(user_rating.rating)as total_likes FROM recipeApp.user_rating Group by user_rating.recipe_id Having user_rating.recipe_id =" + idrecipe;
  connection.query(Recipe_Likes, (err, results) => {
    if (err) {
      return res.send(err)
    }
    else {
      return res.json(results);
    }
  })
})

//API call for save button
app.get('/api/save_button', (req, res) => {
  const {  iduser, idrecipe } = req.query;
  const Save_button = "INSERT INTO `recipeApp`.`saved_recipe` (`id_user`, `recipe_saved`) VALUES ('" + iduser + "','" + idrecipe + "')";
  connection.query(Save_button, (err, results) => {
    if (err) {
      return res.send(err)
    }
    else {
      return res.json(results);
    }
  })
})

//API call for unsave button
app.get('/api/unsave_button', (req, res) => {
  const {  iduser, idrecipe } = req.query;
  const Unsave_button = "DELETE FROM `recipeApp`.`saved_recipe` WHERE (`id_user` =" + iduser + ") and (`recipe_saved` =" + idrecipe + ")";
  connection.query(Unsave_button, (err, results) => {
    if (err) {
      return res.send(err)
    }
    else {
      return res.json(results);
    }
  })
})

//request for recommendations
app.get('/getRecommendations', (req, res) => {

  //checks if user has liked any recipes, only provides recommendations if user has some liked recipes
  if (req.query.id <= arr.length) {

    //calls collaborative filtering method to get recommendations  
    result = recommend.cFilter(arr, (req.query.id - 1));

    //array that holds recommended recipe namse
    var x = [];

    for (i = 0; i < result.length; i++) {

      //get the name of recommended recipes based on index name. its result + 1 because one index starts 0 whereas other starts at 1
      connection.query("SELECT recipeName FROM recipeApp.recipe where idrecipe =" + (result[i] + 1), function (err, names) {


        x.push(names[0]['recipeName'])


      });


    }

    // added a timeout function to ensure that query above is completed and data is added to array x
    setTimeout(function () {
      res.send(x)

    }, 3000);
  } else {

    // if user has no liked recipes it tells user to like recipes to get recommendations
    res.send(['Getting recipes or like recipes to get recommendations....'])
  }

})


//array to hold 2d matrix of users liked items
var arr = [];

// gets count of users who have like a recipe
function getCount() {
  return new Promise((resolve, reject) => {
    connection.query("SELECT count(distinct(user_id)) as count FROM recipeApp.user_rating;", function (err, count) {
      resolve(count[0]['count'])
    });
  });
}

//get liked items for every user who has like a recipe and creates array for the collaborative filtering method which uses matrix factorization
function getData(i) {
  return new Promise((resolve, reject) => {
    connection.query("SELECT rating FROM recipeApp.user_rating where user_id =" + i, function (err, result) {
      var items = [];
      for (j = 0; j < result.length; j++) {

        items.push(result[j]['rating']);
      }
      resolve(items);
    });
  });
}



// async function to populate arr only when getCount and getData functions been executed      
getCount().then((count) => {
  for (i = 1; i <= count; i++) {
    getData(i).then((data) => { arr.push(data) });
  }
});
//get user id
app.get("/getUserid", (req, res) => {
  connection.query("SELECT iduser FROM recipeApp.user where userEmail = " + "'" + req.query.email + "'", function (error, results) {
    if (error) throw error;
    res.json(results[0]['iduser']);
  });
});


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.listen(port, () => console.log(`Listening on port ${port}`));
