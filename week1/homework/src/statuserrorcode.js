function errorState(state, response) {
  response.writeHead(404, { 'Content-Type': 'application/json' });
  response.write(JSON.stringify('File not Found'));
}

module.exports = errorState;
