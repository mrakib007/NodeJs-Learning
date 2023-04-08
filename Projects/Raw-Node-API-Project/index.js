// Title: Uptime monitoring application
// Description: A RESTFUl API to monitor up or down time of user defined links

const http = require('http');
const url = require('url');
const {StringDecoder} = require('string_decoder');
//app object - module scaffolding
const app = {};
//configuration
app.config = {
    port: 3000,
};
//create server
app.createServer = () =>{
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port,()=>{
        console.log(`Listening to port ${app.config.port}`);
    });
};

//handle request response
app.handleReqRes = (req,res) =>{
    //request handling
    // get the url and parse it
    const parsedUrl = url.parse(req.url,true);
    const path = parsedUrl.pathname;
    const trimmedPath =  path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queryStringObject = parsedUrl.query;
    const headersObject = req.headers;

    const decoder = new StringDecoder('utf-8');
    let realData = '';
    req.on('data',(buffer)=>{
        realData += decoder.write(buffer);
    });
    req.on('end',()=>{
        realData += decoder.end();
        //response handle
        res.end('hello world');
    })
}
//start the server
app.createServer();