'use strict';

var utils = require('../utils/writer.js');
var Ru = require('../service/RuService');
const csv = require('csv-parser');
const fs = require('fs');

fs.createReadStream('data.csv')
  .pipe(csv())
  .on('data', (row) => {
    console.log(row);
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });

module.exports.getRUDetails = function getRUDetails (req, res, next) {
  var id = req.swagger.params['id'].value;
  Ru.getRUDetails(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getRUS = function getRUS (req, res, next) {
  Ru.getRUS()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
