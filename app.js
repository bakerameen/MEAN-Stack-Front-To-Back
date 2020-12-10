const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

const app = express();

// route
const users = require('./routes/users');

// connect to databse
mongoose.connect(config.databse);

// on connected
mongoose.connection.on('connected', () => {
console.log('connected to databse'+config.databse);
});


// on error db connected
mongoose.connection.on('erro', (err) => {
    console.log('databse error'+err);
    });


// Port Number
const port = process.env.PORT || 8080;

// cors MiddleWare
app.use(cors());

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

// bodyParser Middleware

app.use(bodyParser.json());

app.use('/users', users);

// index route
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// start server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})