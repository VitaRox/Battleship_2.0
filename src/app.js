const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const path = require('path');
const routes = require('routes');
/*
 Tells our program to use 'ejs' template engine;
 Leaving this off right now for simplicity's sake;
 Add back in when separating html and js files;
 html goes into 'pages', js goes into 'public/javascript';
 app.set('view engine', 'ejs');
*/

// Show server in what director to locate static files ('static' or 'public', usually);
router.use(express.static(path.join(__dirname, `./public`)));
router.use('/', routes());

// Establish web server listening on an available port;
const server = app.listen(port, () => {
  console.log(`Scrubby bubby boo! ${port}!`);
  
});

// Parse input strings;
router.use(bodyParser.json());
router.use(bodyParser.urlencoded(
  { extended: true }));

router.post('/battleship.html/getUpdateDisplay()', (req, res, next) => {

});
// app.post('/', function (req, res) {
//   const guessIndex = req.body;
//   res.send(' Submitted Successfully!');
// });




