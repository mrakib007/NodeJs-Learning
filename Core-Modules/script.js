// const path = require('path');
// const os = require('os');
// const myPath = 'D:/Project/NodeJs Learning/Core-Modules/script.js';

// console.log(path.basename(myPath));
// console.log(path.extname(myPath));
// console.log(path.parse(myPath));

// console.log(os.platform());
// console.log(os.homedir());
// console.log(os.cpus());

const fs = require('fs');
fs.writeFileSync('myFile.txt','Hello programmers');
fs.writeFileSync('myFile.txt','Hello programmers, how are you?');
fs.appendFileSync('myFile.txt','You should be very passionate about programming');

// const data = fs.readFileSync('myFile.txt'); //sync
fs.readFile('myFile.txt',(error,data)=>{
    console.log(data.toString());
}); //async

console.log('hello'); //this will be printed before the myFile.txt

// console.log(data); //this returns buffers
// console.log(data.toString());