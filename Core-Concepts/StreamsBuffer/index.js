const fs = require('fs');

const ourReadStream = fs.createReadStream(`${__dirname}/bigData.txt`,'utf-8');
ourReadStream.on(`data`,(chunk)=>{
    console.log(chunk);
    // console.log(chunk.toString()); //if you dont want to use utf8
})