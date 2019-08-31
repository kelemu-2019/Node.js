function resetState(state, response) {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(JSON.stringify('state: ' + state));
}

module.exports = resetState;
