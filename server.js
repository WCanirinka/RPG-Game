/* eslint-disable import/no-unresolved */
const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');

const app = express();
app.use('/', serveStatic(path.join(__dirname, '/build')));
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, '/build/index.html'));
});
const port = process.env.PORT || 8080;
app.listen(port);
// eslint-disable-next-line no-console
console.log(`app is listening on port: ${port}`);
