const http = require('http');

class ExpressLite {
  constructor() {
    this.app = null;
    this.mapping = { get: [], post: [] };
  }

  get(pathStr, fun) {
    this.mapping.get.push({ pathStr: fun });
  }

  getHandler(req) {
    let url = req.url;
    let method = req.method.toLowerCase();
    let handlers = this.stack[method];
    console.log(`method, ${method}`);
    console.log(`handlers: ${handlers}`);
  }

  listen(PORT, HOST) {
    this.app = http.createServer((req, res) => {
      let handler = this.getHandler(req);
      console.log(`handler: ${handler}`);
    });
    this.app.listen(PORT, HOST, () => {
      console.log(`Server running at http://${HOST}:${PORT}/`);
    });
    return this.app;
  }
}

module.exports = ExpressLite;
