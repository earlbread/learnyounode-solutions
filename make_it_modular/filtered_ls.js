const fs = require('fs');
const path = require('path');

module.exports = (dirname, extname, callback) => {
  extname = '.' + extname;
  fs.readdir(dirname, (err, files) => {
    if (err) return callback(err);

    files = files.filter(file => {
      return extname === path.extname(file);
    });

    return callback(null, files);
  });

}
