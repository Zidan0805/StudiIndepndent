const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todoRoutes');

app.use(bodyParser.json());

app.use('/todos', todoRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
