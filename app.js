const express = require('express');
const bodyParser = require('body-parser');
const app = express();

require('dotenv').config();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const knex = require('./db/knex')


app.listen(port, () => {
  console.log(`listening on ${port}`);
});
