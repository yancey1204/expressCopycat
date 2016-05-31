const http = require('http');

class ExpressLite {
  constructor() {
    this.mappings = [];
  }

  get(url, callback) {
    this.mappings.push({
      url,
      callback,
    });
  }

  send(msg) {
    this.end(msg);
  }

  httpHandler(req, res) {
    let found = false;
    this.mappings.forEach((mapping) => {
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

  listen(PORT, HOST) {
    const server = http.createServer((req, res) => {
      res.send = this.send;
      this.httpHandler(req, res);
    });

    server.listen(PORT, HOST, () => {
      console.log(`Server running at http://${HOST}:${PORT}/`);
    });
  }
}

module.exports = ExpressLite;
