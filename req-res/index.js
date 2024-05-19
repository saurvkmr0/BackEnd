require('dotenv').config();
const express = require('express')

const app = express();
const port = process.env.PORT; //getting the PORT value form env file

app.get('/', (req,res)=>{
    res.send("you are at home page");
})
app.get('/login', (req,res)=>{
    res.send("<h1>you are at login page</h1>");
})

app.listen(port,()=>{
    console.log(`listning at port ${port}`)
})
