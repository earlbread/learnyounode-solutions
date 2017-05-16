const http = require('http');
const bl = require('bl');

const urls = process.argv.slice(2);

let result = [];
let count = 0;

function printResult() {
  for (let i = 0; i < urls.length; i++) {
    console.log(result[i]);
  }
}

function httpGet(index) {
  http.get(urls[index], (res) => {
    res.pipe(bl((err, data) => {
      if (err) return console.error(err);

      result[index] = data.toString();
      count++;

      if (count === urls.length) {
        printResult();
      }
    }));
  });
}

for (let i = 0; i < urls.length; i++) {
  httpGet(i);
}
