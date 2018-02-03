const serverConfig = require('./configs/server-config');
const express = require('express');
const path = require('path');

const app = express();
const root = path.resolve(__dirname, 'build');

const bodyParser = require('body-parser');

// const mongoose   = require('mongoose');
// mongoose.connect("mongodb://elite.fishackathon:elite.fishackathon.qq@ds125555.mlab.com:25555/fishackathon");

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ROUTES FOR OUR API
// =============================================================================
const apiRoutes = express.Router();              // get an instance of the express Router

app.use(express.static(root));

app.use('/api', apiRoutes);

app.get('*', function(req, res) {
  res.sendfile(path.resolve(root, 'index.html'));
});


require('./apiRoutes')(apiRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log('node development mode now is listening on: 3000');
  console.log(`http://localhost:${serverConfig.nodeServerPort}`);
  console.log(`http://127.0.0.1:${serverConfig.nodeServerPort}`);
  console.log(serverConfig.nodeDevAddress);
});

