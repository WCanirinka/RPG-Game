/* eslint-disable import/no-unresolved */
import express from 'express';
import serveStatic from 'serve-static';
import { join } from 'path';

const app = express();
app.use('/', serveStatic(join(__dirname, '/build')));
app.get(/.*/, (req, res) => {
  res.sendFile(join(__dirname, '/build/index.html'));
});
const port = process.env.PORT || 8080;
app.listen(port);
// eslint-disable-next-line no-console
console.log(`app is listening on port: ${port}`);
