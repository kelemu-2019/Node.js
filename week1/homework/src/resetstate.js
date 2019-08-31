function resetState(state, response) {
  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.write(JSON.stringify('state: ' + state));
}

module.exports = resetState;
