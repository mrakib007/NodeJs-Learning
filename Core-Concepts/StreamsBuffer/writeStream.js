const fs = require('fs');

const ourReadStream = fs.createReadStream(`${__dirname}/bigData.txt`);
const ourWriteStream = fs.createWriteStream(`${__dirname}/output.txt`);

ourReadStream.on(`data`,(chunk)=>{
    ourWriteStream.write(chunk);
    // console.log(chunk.toString()); //if you don't want to use utf8
})