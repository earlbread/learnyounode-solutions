const fs = require('fs');
const path = require('path');

const dirpath = process.argv[2];
const extname = '.' + process.argv[3];

fs.readdir(dirpath, (err, files) => {
  if (err) return console.error(err);

  for (let file of files) {
    if (extname === path.extname(file)) {
      console.log(file);
    }
  }
});
