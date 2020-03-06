const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');

// Show server in what directory to locate static files ('static' or 'public', usually);
router.use(express.static(path.join('../views/battleship')));
router.use(express.static(path.join('/public/images/')));

module.exports = () => {
  app.get('/', function(req, res) {
  // res.sendFile(path.join(`${__dirname} /views/`));
  res.render("../views/battleship", { pageTitle: "Battleship 2.0" });
  res.sendFile(express.static(path.join("../views/battleship.html")));
  });
  return router;
};





