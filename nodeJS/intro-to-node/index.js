// console.log("he");

// const fs=require("fs"); //fs is fileSystem
// fs.copyFileSync("textFile1.txt", "textFile2.txt"); // to copy the content of file form one file to another file.

var superHero = require('superheroes'); //how to use the package

var mySuperHero = superHero.random();

for(var i=0; i<5;i++)
{
    mySuperHero = superHero.random();
    console.log(mySuperHero);
}
