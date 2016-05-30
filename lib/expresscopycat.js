const http = require('http');

const expressCopycat = {};
const mappings = [];

expressCopycat.get = (url, callback) => {
  mappings.push({
    url,
    callback,
  });
  console.log(mappings);
};

function httpHandler(req, res) {
  mappings.forEach((mapping) => {
    if (req.url === mapping.url) {
      res.statusCode = 200;
      mapping.callback(res);
      res.end(`hello ${req.url}`);
    }
  });
  res.statusCode = 404;
  res.end('page not found');
}

expressCopycat.listen = (PORT, HOST) => {
  const server = http.createServer((req, res) => {
    console.log(req.url);
    httpHandler(req, res);
  });

  server.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}/`);
  });
};

module.exports = expressCopycat;
