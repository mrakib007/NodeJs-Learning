const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write('<html><head><title>Form</title></head>');
    res.write('<body><form method="post" action="/process"><input name="message"/></form></body>');
    res.end();
  }else if(req.url === '/process' && req.method === 'POST'){
    //when data is received in a chunk
    const body = [];
    req.on('data',(chunk)=>{
        body.push(chunk);
    })

    //when response given after entire data is here
    req.on('end',()=>{
        console.log('stream finished');
        const parsedBody = Buffer.concat(body).toString();
        console.log(parsedBody);
        res.write('Thank you for submitting');
        res.end();
    })
    
  }else{
    res.write('Not found');
    res.end();
  }
});

server.listen(3000);
console.log("listening on port 3000");


// const fs = require('fs');

// const ourReadStream = fs.createReadStream(`${__dirname}/bigData.txt`,'utf-8');
// ourReadStream.on(`data`,(chunk)=>{
//     console.log(chunk);
//     // console.log(chunk.toString()); //if you don't want to use utf8
// })
