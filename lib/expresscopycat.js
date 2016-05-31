const http = require('http');

const expressCopycat = {};
const mappings = [];

expressCopycat.get = (url, callback) => {
  mappings.push({
    url,
    callback,
  });
};

function send(msg) {
  this.end(msg);
}

function httpHandler(req, res) {
  let found = false;
  mappings.forEach((mapping) => {
    if (req.url === mapping.url) {
      mapping.callback(req, res);
      found = true;
    }
  });
  if (!found) {
    res.statusCode = 404;
    res.end('page not found');
  }
}

expressCopycat.listen = (PORT, HOST) => {
  const server = http.createServer((req, res) => {
    res.send = send;
    httpHandler(req, res);
  });

  server.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}/`);
  });
};

module.exports = expressCopycat;
