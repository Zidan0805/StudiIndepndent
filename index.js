var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var db = require('./queries');
var jwt = require('jsonwebtoken');
var swaggerJsdoc = require('swagger-jsdoc');
var swaggerUi = require('swagger-ui-express');
var morgan = require('morgan');
var port = 3000;

app.use(morgan('tiny'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
});

app.get('/movies', db.getData);
app.get('/movies/:id', db.getDataById);
app.post('/movies', db.createData);
app.put('/movies/:id', db.updateData);
app.delete('/movies/:id', db.deleteData);
app.get('/movies/?limit=5', db.paginateData);

app.post('/register', (req, res) => {
  const { email, gender, password, role } = req.body;
  pool.query('INSERT INTO users (email, gender, password, role) VALUES ($1, $2)', [email, gender, password], role, (err, result) => {
    if (err) {
      res.status(500).send('Gagal mendaftar pengguna.');
    } else {
      res.status(201).send('Pengguna berhasil terdaftar.');
    }
  });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  pool.query('SELECT * FROM users WHERE email = $1', [email], (err, result) => {
    if (err) {
      res.status(500).send('Gagal saat mencoba login.');
    } else {
      const user = result.rows[0];
      if (user && user.password === password) {
        const token = jwt.sign({ email }, 'secret_key', { expiresIn: '1h' });
        res.status(200).json({ token });
      } else {
        res.status(401).send(' Terjadi kesalahan.');
      }
    }
  });
});

const option = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Express API menggunakan Swagger',
      version: '0.1.0',
      description:
      'Simple CRUD API Application yang dibuat menggunakan Express dan Swagger',
    },
    server: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./queries.js'],
};
const specs = swaggerJsdoc(option);
app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})