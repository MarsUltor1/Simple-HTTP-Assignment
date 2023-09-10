const http = require('http');
const htmlHandler = require('./htmlResponses.js');
const textHandler = require('./textResponses.js');
const jsonHandler = require('./jsonResponses.js');
const imageHandler = require('./imageResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
  console.log(request.url);

  // Handle request
  switch (request.url) {
    case '/':
      htmlHandler.getIndex(response);
      break;
    case '/page2':
      htmlHandler.getPage2(response);
      break;
    case '/hello':
      textHandler.getHello(response);
      break;
    case '/time':
      textHandler.getTime(response);
      break;
    case '/helloJSON':
      jsonHandler.getHelloJSON(response);
      break;
    case '/timeJSON':
      jsonHandler.getTimeJSON(response);
      break;
    case '/dankmemes':
      imageHandler.getSponge(response);
      break;
    default:
      htmlHandler.getIndex(response);
      break;
  }
};

http.createServer(onRequest).listen(port, () => {
  console.log(`Listening on 127.0.0.1:${port}`);
});
