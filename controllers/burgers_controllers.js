var express = require("express");

var burger = require("../models/burgers.js");

var router = express.Router();

//need to setup routers for landing page
router.get("/", function (req, res){
    burger.selectAll(function(burger){
        console.log(burger);
        res.render("index", {burger});
    });
});







module.exports = router;