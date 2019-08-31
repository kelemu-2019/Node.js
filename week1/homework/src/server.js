'use strict';

const http = require('http');
const initialState = require('./initialState');
const addState = require('./addstate');
const subtractState = require('./subtractstate');
const resetState = require('./resetstate');
const errorState = require('./statuserrorcode');
/* `createServer` MUST return an instance of `http.Server` otherwise the tests
 * will fail.
 */

function showState(state, request, response) {
  console.log('hi im in the function');
  let url = request.url;

  switch (url) {
    case '/state':
      initialState(state, response);
      break;

    case '/add':
      addState(state, response);
      break;

    case '/subtract':
      subtractState(state, response);
      break;

    case '/reset':
      resetState(state, response);
      break;

    default:
      errorState(state, response);

      break;
  }
}

function createServer(port) {
  let state = 10;

  const server = http.createServer(function(request, response) {
    // TODO: Write your homework code here
    console.log(request.url);

    showState(state, request, response);
    response.end();
  });

  return server;
}

module.exports = {
  createServer,
};
