const http = require('http');
const application = {};

application.listen = () => {
  const server = http.createServer(this);
  return server.listen.apply(server, arguments);
};

export { application };
