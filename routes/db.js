var express = require('express');
var router = express.Router();
const Lightbulp = require('../models').Lightbulp;


// render db fra views, med et statement der henter alt data fra Lightbulp

/* GET home page. */
router.get('/', async function(req, res, next) {
    

    // koble på db
    // sende en query
    // modtage et objekt
    // vise objektet i templaten
    res.render("db", {
        title: "db",
        lightbulps: await Lightbulp.findAll()
    });
});

module.exports = router;
