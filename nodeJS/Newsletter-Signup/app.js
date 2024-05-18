const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('public')) 
//all the css and images path will be used as if public is the root directory
//here the given folder i.e. public is used to store all the css and images also ./public is defined as the root to fetch such files


app.get("/",function(req,res){
    console.log("page is running");
    return res.sendFile(__dirname+"/signup.html");
})


app.post("/",function(req,res){
    
    var firstName=req.body.firstName;
    var lastName=req.body.lastName;
    var email=req.body.email;
    console.log(firstName);
    console.log(lastName);
    console.log(email);

})



app.listen(5500,function(){
    console.log("Server is running at port 5500.");
});






//ApiKey: 90d3b544dd19945562002d3a905f340b-us21
