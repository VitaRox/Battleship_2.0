const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const path = require('path');
const router = require('routes');
// Gets code to make board initially and subsequently;
// When user hit main URL deliver 'battleship.html';

/*
 Tells our program to use 'ejs' template engine;
 Leaving this off right now for simplicity's sake;
 Add back in when separating html and js files;
 html goes into 'pages', js goes into 'public/javascript';
 app.set('view engine', 'ejs');
*/

// Add the middleware router to the stack;
// app.use('/', 'public');
// app.use(express.static('public'));
// Parse input strings;
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded(
//   { extended: true }));

// Router middleware;
// Route user input ("GET" requests);
app.get(`/`, (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'battleship.html'));
  // res.type('html');
  // res.writeHead(200, {'Content-Type': 'text/html'});
  // res.sendFile(("battleship.html/", { root: 'public' }));
 
});

app.use('/', router);



// Establish web server listening on an available port;
app.listen(port);
console.log(`Running on port ${port}`);

// app.post('/', function (req, res) {
//   const guessIndex = req.body;
//   res.send(' Submitted Successfully!');
// });




