const express = require('express');
const router = express.Router();

// Gets code to make board initially and subsequently;
// When user hit main URL deliver 'battleship.html';
module.exports = () => {
  router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,`/public/battleship.html`));
    // res.render(`public/battleship`, { pageTitle: "Battleship 2.0" });
  });
  return router;
};





