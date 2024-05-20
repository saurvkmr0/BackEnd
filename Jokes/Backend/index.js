const express = require('express');
const cors = require('cors');
const app=express();
require('dotenv').config();
app.use(cors())

app.get('/jokes',(req,res) => {
    const jokes = [
        {
            id:1,
            title:"joke1",
            discp:"this is the first joke",
        },
        {
            id:2,
            title:"joke2",
            discp:"this is the second joke",
        },
        {
            id:3,
            title:"joke3",
            discp:"this is the third joke",
        },
        {
            id:4,
            title:"joke4",
            discp:"this is the fourth joke",
        },
        {
            id:5,
            title:"joke5",
            discp:"this is the fifth joke",
        },
    ]
    res.send(jokes)
})

app.get('/',(req,res) => {
    res.send('<h1>Welcome to jokes page</h1>')
})


app.listen(process.env.PORT,() => {
    console.log(`Server is running on port ${process.env.PORT}`)
})