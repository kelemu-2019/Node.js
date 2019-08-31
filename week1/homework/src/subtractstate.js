function subtractState(state, response) {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(JSON.stringify('state:' + (state - 1)));
}

module.exports = subtractState;
