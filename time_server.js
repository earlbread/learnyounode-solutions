const net = require('net');

const port = process.argv[2];

function zeroFill(num) {
  return (num < 10 ? '0' : '') + num;
}

function now() {
  const date   = new Date();
  const year   = date.getFullYear();
  const month  = zeroFill(date.getMonth() + 1);
  const day    = zeroFill(date.getDate());
  const hour   = zeroFill(date.getHours());
  const minute = zeroFill(date.getMinutes());

  return `${year}-${month}-${day} ${hour}:${minute}`
}
const server = net.createServer((socket) => {
  socket.end(now() + '\n');
});

server.listen(port);
