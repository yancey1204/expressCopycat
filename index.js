const expressCopycat = require('./lib/expresscopycat');

const app = expressCopycat;

const hostname = '127.0.0.1';
const port = 3000;


app.get('/', (res) => {
  console.log(`Got response: ${res.statusCode}`);
  console.log('index');
});

app.get('/home', (res) => {
  console.log(`Got response: ${res.statusCode}`);
  console.log('home');
});

app.listen(port, hostname);
