// Title: Uptime monitoring application
// Description: A RESTFUl API to monitor up or down time of user defined links

const http = require('http');
const {handleReqRes} = require('./helpers/handleReqRes');
const environment = require('./helpers/environments');
const data = require('./lib/data');
//app object - module scaffolding
const app = {};

data.create('test','newFile',{'name':'Bangladesh','language':'Bangla'},(error)=>{
    console.log(`error was`,error);
})
//create server
app.createServer = () =>{
    const server = http.createServer(app.handleReqRes);
    server.listen(environment.port,()=>{
        console.log(`Listening to port ${environment.port}`);
    });
};

//handle request response
app.handleReqRes = handleReqRes;
//start the server
app.createServer();