const http = require("http");
const fs = require('fs');

const server = http.createServer((req, res) => {
    //req is a readable stream and we receive this from the user
    //res the response we send the users from the server.
    const myReadStream = fs.createReadStream(__dirname + '/bigData.txt','utf-8');
    myReadStream.pipe(res);
});

server.listen(3000);
console.log("listening on port 3000");

