const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const path = require('path');
const router = require('../routes/routes.js');
const Board = require('../model/Battleship');

const Ship = Board.Ship();

const engine = require('consolidate');
const mustache = require('mustache-express');

// const html = require(`html`);
// const handlebars = require(`./handlebars`);
// const publicFolder = require(`../public`);

/*
 Tells our program to use 'ejs' template engine;
 Leaving this off right now for simplicity's sake;
 Add back in when separating html and js files;
 html goes into 'pages', js goes into 'public/javascript';
*/

app.set('/views', '.ejs');
app.engine(`html`, engine["mustache"]);
app.set(`view engine`, `.html`);

// Gets code to make board initially and subsequently;
// When user hit main URL deliver 'battleship.html';
// Add the middleware router to the stack;
// app.use(express.static(__dirname,'public'));


app.use(express.static('/public'));
app.use(express.static(`/public/images`));
app.use(express.static(`/views/battleship.html`));

// Parse input strings;
// app.use(bodyParser());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded(
//   { extended: true }));

// Router middleware;
// Route user input ("GET" requests);
app.use('/', router());
router();

app.get(`/`, (req, res) => {
  
  // Instantiate Ship objects;
  const aircraftCarrier = new Ship(5, "aircraftCarrier", 2);
  const battleship = new Ship(4, "battleship", 3);
  const cruiser = new Ship(3, "cruiser", 4);
  const submarine = new Ship(3, "submarine", 5);
  const destroyer = new Ship(2, "destroyer", 6);
// const dinghy = new Ship(1, "dinghy", 7);
  
  // Place our ships within the array;
  Board.aircraftCarrier.placement();
  Board.battleship.placement();
  Board.cruiser.placement();
  Board.submarine.placement();
  Board.destroyer.placement();
  // res.type('html');
  // res.writeHead(200, {'Content-Type': 'text/html'});
  // res.send(Board.initializeGameArray());
  res.render(path.join(__dirname, '../views', 'battleship.html'));
  // res.sendFile(('views/battleship.html'+ { root: 'public' }));
  let newBoard = Board.dispBoard();
  console.log(Board.gameArray);
  res.send(newBoard);
  res.render("battleship.html", { "Board": newBoard });
  // res.next();
});

app.get('./guess', (req, res) => {
  let input = req.params.body;
  let x = input.charAt(0);
  let y = input.charAt(1);
  let results = Board.getUpdateDisplay(x, y);
  res.sendFile(results.gameArray);
  let turn = Board.dispBoard();
  res.render("/views/battleship.html", {Board : `turn` });
  // res.next();
});


// Establish web server listening on an available port;
app.listen(port);
console.log(`Running on port ${port}`);

// app.post('/', function (req, res) {
//   const guessIndex = req.body;
//   res.send(' Submitted Successfully!');
// });




