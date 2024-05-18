const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){  
    // res.send("<h1>Hello world..</h1>");
    // for giving bit of data as a response we use res.send and for files like html we use res.sendFile
    res.sendFile(__dirname+"/index.html"); //we use __dirname to gat the full location of the directory in with file is present and the we add the file name with the full dir path using /
});

app.post("/",function(req,res){
    var num1=Number(req.body.num1);
    var operator=req.body.operator;
    var num2=Number(req.body.num2);
    var result;
    if(operator=="+")
    {
        result = num1 + num2;
        res.send("The result is "+result);
    }
    else if(operator=="-")
    {
        result = num1 - num2;
        res.send("The result is "+result);
    }
    else if(operator=="*")
    {
        result = num1 * num2;
        res.send("The result is "+result);
    }
    else if(operator=="/")
    {
        result = num1 / num2;
        res.send("The result is "+result);
    }
    else
    {
        res.send("Invalid operator is used");
    }

});




app.listen(5500, function(){
    console.log("server started at 5500 port");
});