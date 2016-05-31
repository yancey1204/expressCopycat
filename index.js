// const expressCopycat = require('./lib/expresscopycat');
// const app = expressCopycat;

const ExpressLite = require('./lib/expressLite');
const app = new ExpressLite();

const hostname = '127.0.0.1';
const port = 3000;

app.get('/', (req, res) => {
  res.statusCode = 200;
  console.log(`Got response: ${res.statusCode}`);
  res.send('index');
});

app.get('/home', (req, res) => {
  res.statusCode = 200;
  console.log(`Got response: ${res.statusCode}`);
  res.send('home');
});

app.listen(port, hostname);
