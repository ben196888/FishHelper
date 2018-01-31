const serverConfig = require('./configs/server-config');
const express = require('express');
const path = require('path');

const app = express();
const root = path.resolve(__dirname, 'build');

app.use(express.static(root));
app.get('*', function(req, res) {
  res.sendfile(path.resolve(root, 'index.html'));
});

app.listen(process.env.PORT || 3000, () => {
  console.log('node development mode now is listening on:');
  console.log(`http://localhost:${serverConfig.nodeServerPort}`);
  console.log(`http://127.0.0.1:${serverConfig.nodeServerPort}`);
  console.log(serverConfig.nodeDevAddress);
});
