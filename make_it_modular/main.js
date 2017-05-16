let filtered_ls = require('./filtered_ls.js');

let dirname = process.argv[2];
let extname = process.argv[3];

filtered_ls(dirname, extname, (err, files) => {
  if (err) return console.error(err);

  for (let file of files) {
    console.log(file);
  }
});
