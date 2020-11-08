const express = require("express");
const bodyParser = require("body-parser");
var mysql = require("mysql");
const recommend = require('collaborative-filter');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//Defining parameters for sql connection
var connection = mysql.createConnection({
  host: "35.223.12.195",
  user: "root",
  password: "msci342",
  database: "recipeApp",
});

//Creating sql connection
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
  connection.query("SELECT * FROM recipe", function (error, results, fields) {
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


//get user id
app.get("/getUserid", (req, res) => {
  connection.query("SELECT iduser FROM recipeApp.user where userEmail = " + "'" + req.query.email + "'" , function (error, results) {
    if (error) throw error;
    res.json(results[0]['iduser']);
  });
});


//request for recommendations
app.get('/getRecommendations', (req, res) => {
  
  //checks if user has liked any recipes, only provides recommendations if user has some liked recipes
  if(req.query.id <= arr.length)  {

  //calls collaborative filtering method to get recommendations  
  result = recommend.cFilter(arr, (req.query.id -1));

  //array that holds recommended recipe namse
  var x = [];

  for(i = 0; i< result.length; i++){

    //get the name of recommended recipes based on index name. its result + 1 because one index starts 0 whereas other starts at 1
    connection.query("SELECT recipeName FROM recipeApp.recipe where idrecipe =" + (result[i]+1), function (err, names) { 


        x.push(names[0]['recipeName'])
    

    });     


  }

  // added a timeout function to ensure that query above is completed and data is added to array x
  setTimeout(function(){
    res.send(x)

}, 3000);} else{

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
                for(j = 0; j<result.length; j++){
    
                    items.push(result[j]['rating']);
                }
                resolve(items);
        });});}



// async function to populate arr only when getCount and getData functions been executed      
getCount().then((count)=>{
        for(i = 1; i<= count; i++){
        getData(i).then((data)=>{arr.push(data)});  }  
         });



app.listen(port, () => console.log(`Listening on port ${port}`));
