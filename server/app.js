const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
const mainPageRouter = require('./routes/mainPage');


app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', mainPageRouter);


app.listen(process.env.DB_PORT, () => {
  console.log('server start ', process.env.DB_PORT);
});
