const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req,res){

    res.sendFile(__dirname+"/index.html");
    
});

app.post("/", function(req,res){

    const req_unit = req.body.units;
    var units,notation;

    if(req_unit=='C'){units="metric", notation='C';}
    if(req_unit=='F'){units="imperial", notation='F';}

    const query = req.body.cityName;
    
    apiKey = "0c30afd916f09e5e750bcc8248f05605";

    const url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apiKey+"&units="+units;

    https.get(url, function(response){
        
        response.on("data",function(data){
            const weatherData=JSON.parse(data);

            const temp=weatherData.main.temp;
            const weatherDescription=weatherData.weather[0].description;
            const icon=weatherData.weather[0].icon;
            const imgURL="https://openweathermap.org/img/wn/"+icon+"@2x.png";
            
            // console.log(temp);
            // console.log(weatherDescription);

            // only one res.send can be execute in a app.get function, but we can use multiple res.write and then call the res.send function to send all the res.write 
            res.write("<h1>The temperature in "+query+" is " +temp + " *"+notation+" </h1>");
            res.write("<h3>The weather condition is " + weatherDescription+".</h3>");
            res.write("<img src="+imgURL+">");

            res.send();

            

        })
        
    });

});

    

app.listen(5500,function(){
    console.log("Server is running at port 5500.");
});