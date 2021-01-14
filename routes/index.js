var express = require('express');
var path = require('path');
var fs = require("fs");
var router = express.Router();
var md5 = require("md5-file");

router.get('/update', function(req, res, next) { console.log(req.headers);

var filePath = path.join(__dirname, '../updates/smartbell.ino.bin');
console.log( md5.sync(filePath));


res.header(
   "x-MD5",  md5.sync(filePath)
);

res.sendFile(filePath, function (err) {
  if (err) {
    console.log(err);
   next(err)
  } else {
   console.log('Sent:', filePath)
  }
 });

});

module.exports = router;