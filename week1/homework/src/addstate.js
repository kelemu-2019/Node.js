function addState(state, response) {
  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.write(JSON.stringify('state:' + (state + 1)));
}

module.exports = addState;
