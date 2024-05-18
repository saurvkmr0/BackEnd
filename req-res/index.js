const express = require('express')

const app = express();
const port = 4000;

app.get('/', (req,res)=>{
    res.send("you are at home page");
})
app.get('/login', (req,res)=>{
    res.send("<h1>you are at login page</h1>");
})

app.listen(port,()=>{
    console.log(`listning at port ${4000}`)
})
