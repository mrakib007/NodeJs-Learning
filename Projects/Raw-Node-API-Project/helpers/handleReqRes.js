const {StringDecoder} = require('string_decoder');
const url = require('url');
const routes = require('../routes');
const {notFoundHandler} = require('../handlers/routeHandlers/notFoundHandler');

// module scaffolding
const handler = {};
//handle request response
handler.handleReqRes = (req, res) => {
  //request handling
  // get the url and parse it
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, "");
  const method = req.method.toLowerCase();
  const queryStringObject = parsedUrl.query;
  const headersObject = req.headers;

  const requestProperties = {
    parsedUrl,
    trimmedPath,
    method,
    queryStringObject,
    headersObject,
  }

  const decoder = new StringDecoder("utf-8");
  let realData = "";

  const chosenHandler = routes[trimmedPath] ? routes[trimmedPath] : notFoundHandler;


  req.on("data", (buffer) => {
    realData += decoder.write(buffer);
  });
  req.on("end", () => {
    realData += decoder.end();
    chosenHandler(requestProperties,(statusCode,payload)=>{
      statusCode = typeof(statusCode) === 'number' ? statusCode : 500;
      payload = typeof(payload) === 'object' ? payload : {};
      const payLoadString = JSON.stringify(payload);
  
      //return the final response
      res.writeHead(statusCode);
      res.end(payLoadString);
    });
    //response handle
    res.end("hello world");
  });
};
module.exports = handler;
