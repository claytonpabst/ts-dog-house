const express = require('express');
// const bodyParser = require('body-parser');
const cors = require('cors');
// var massive = require('massive');
// var session = require('express-session');
// var config = require('./config.js');
const helmet = require('helmet');

const app = module.exports = express();

app.use(helmet())

// app.use(bodyParser.json());
// app.use(session({
//   secret: config.secret,
//     resave: true,
//     saveUninitialized: false,
//     cookie:{
//       maxAge: (1000*60*60*24*14) //this is 14 days
//     }
// }))

// massive(config.connection)
// .then( db => {
//   app.set('db', db);
// })

app.use(express.static(__dirname + './../build'))

// var userController = require("./userController.js");

//////////Endpoints for the front end




app.listen(5555, '0.0.0.0', function() {
  console.log('Listening to port:  ' + 5555);
});
