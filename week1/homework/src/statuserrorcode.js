function errorState(state, response) {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(`
    <!html>
    <html>
      <head>
        <title>errorState</title>
        <link href="styles.css" type="text/css" rel="stylesheet"/>
      </head>
      <body>
      <h2>404: File not found</h2>
      </body>
    </html>
  `);
}

module.exports = errorState;
