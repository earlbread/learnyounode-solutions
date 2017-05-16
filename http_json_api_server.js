const http = require('http');
const url = require('url');

const port = process.argv[2];

function parsetime(time) {
  return {
    'hour': time.getHours(),
    'minute': time.getMinutes(),
    'second': time.getSeconds()
  };
}

function unixtime(time) {
  return {
    'unixtime': time.getTime()
  };
}

const server = http.createServer( (req, res) => {
  if (req.method === 'GET') {
    const urlInfo = url.parse(req.url, true);
    const time = new Date(urlInfo.query.iso);
    let result = null;

    if (urlInfo.pathname === '/api/parsetime') {
      result = parsetime(time);
    } else if (urlInfo.pathname === '/api/unixtime') {
      result = unixtime(time);
    }

    if (result) {
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(JSON.stringify(result));
    } else {
      res.writeHead(404);
      res.end();
    }
  } else {
    res.writeHead(403);
    res.end();
  }
});

server.listen(port);
