import express from 'express';
import { products } from './data';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');

  // authorized headers for preflight requests
  // https://developer.mozilla.org/en-US/docs/Glossary/preflight_request
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept ,X-Requested-With,token'
  );
  next();

  app.options('', () => {
    // allowed XHR methods
    res.header(
      'Access-Control-Allow-Methods',
      'GET, PATCH, PUT, POST, DELETE, OPTIONS'
    );
    res.send();
  });
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.get('/products', (req, res) => {
  res.send(products);
});
app.get('/products/:id', (req, res) => {
  const productId = req.params.id;
  const product = products.find((x) => x.id === productId);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({
      msg: 'product not found',
    });
  }
});
app.listen(5000, (err) => {
  if (err) {
    console.log(err);
  }
  console.log('server runnig on port 5000');
});
