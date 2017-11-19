var express = require('express'),
  dyson = require('dyson'),
  path = require('path');

var options = {
  configDir: path.join(__dirname, '../data'),
};

var myApp = express();
myApp.use(express.static('public'));

var configs = dyson.getConfigurations(options);
dyson.registerServices(myApp, options, configs);
myApp.listen(8765);
