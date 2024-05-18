const express = require("express");

const app = express();

app.get("/", function(request,response){
    // console.log(request);
    response.send("<h1>Worldddd!</h1>");

    
});

app.get("/contact",function(req,res){
    res.send("contact me at saurav@gmail.com")
});

app.get("/hobbie",function(req,res){
    res.send("<ul><li>coffe</li><li>code and conding</li></ul>")
});

app.listen(3001, function(){
    console.log("server started");
});