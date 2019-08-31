function subtractState(state, response) {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(`
    <!html>
    <html>
      <head>
        <title>subtractState</title>
        <link href="styles.css" type="text/css" rel="stylesheet"/>
      </head>
      <body>
      <h2>state: ${state - 1} </h2>
      </body>
    </html>
  `);
}

module.exports = subtractState;
