const express=require("express");               //including express in our project
const bodyParser=require("body-parser");        //body parser used for post request
const app=express();
const mongoose = require('mongoose');           //including mongoose in our project
app.set("view engine","ejs");                   //this statement is necessary to run ejs
app.use(express.static("public"));              
app.use(bodyParser.urlencoded({extended:true}));  //for bodyparser

let erro=0;                  //this is global variable used to store validation error and it is set to 0

// Connection URL
mongoose.connect('mongodb://localhost:27017/internship', {useNewUrlParser: true, useUnifiedTopology: true});

//schema
const Sch=new mongoose.Schema({
    ratings: {
        type:Number,
        max:10,
        min:0
      },
 comments:String,
 button:Number
});


//creating collection named as movies
const Movie = mongoose.model('Movie',Sch);

const temporary=new Movie({
    ratings:0,
  comments:"temp",
  button:-1
});
temporary.save();


//Get function for login page
app.get("/",function(req,res)
{
   res.render("login");
});

//Post method for login page
app.post("/",function(req,res,err)
{
    /*I have set name of submit button as "abc" in form of login.ejs and 
       whenever I click the button the previous details in database will be deleted
      i.e Whenever I login to movies counter by clicking login all the previous data will be removed
       */
    
    if(req.body.button=="abc")   
    {
        mongoose.connection.collections['movies'].drop( function(err) {   
            console.log('collection dropped');
          });
    }
    
const dummy=new Movie({
    ratings:0,
  comments:"dummy",
  button:-1
});
dummy.save();
   erro=0;                  /*reset the erro to 0 this is done bcoz when we again enter correct 
                              data after wrong input this will not show the same error message*/
    res.redirect("/movies");//redirecting to movies page
});


//Get method for movies page
app.get("/movies" , function(req,res)
{
    //declaring array of 10 strings to give names to 10 movies declared in movies page
    let names=["Titanic","Fault in our stars","Dhol","Black Panther","Avengers","Dhamaal","Hera Pheri","Deadpool","Spiderman","Avengers"]
    
    //to find the data in database and passing to movies.ejs so that we can print it
    Movie.find({}, function(err, movies) {
        if (err){
            console.log(err);
        }
        else{
        res.render('movies',{movies,names,erro}); /*passing movies , names ,error to movies.ejs so 
                                                    that it will be displayed and user can see*/
        }
    });
});


//Post method for movies page
app.post("/movies",function(req,res)
{
    //storing details of movies collectin  in json form in movie variable
    const movie=new Movie({
        ratings:req.body.ratings,
      comments:req.body.comments,
      button:req.body.button
    });

    //saving data in database
    movie.save(function(error) {
        if (error) {
          erro=error;      //storing validation error in erro variable
        }
        else
        console.log('Document saved successfully!');
    });
             res.redirect('/movies');
             erro=0;       /*reset the erro to 0 this is done bcoz when we again enter correct 
                             data after wrong input this will not show the same error message*/
                            
});


//this function is used to run the server on port 3000
app.listen(3000 , function()
{
   console.log("Server started");
});

