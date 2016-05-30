const expressCopycat = require('./lib/expresscopycat');
const app = expressCopycat;

// const ExpressLite = require('./lib/expressLite');
// const app = new ExpressLite();

const hostname = '127.0.0.1';
const port = 3000;


app.get('/', (req, res) => {
  res.end();
});

app.get('/home', (res) => {
  console.log(`Got response: ${res.statusCode}`);
  console.log('home');
});

app.listen(port, hostname);
