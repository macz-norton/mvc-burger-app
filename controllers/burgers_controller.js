const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();

// all
router.get("/", function(req, res) {

    burger.all(function(data) {

        let handlebarsObject = {
            burgers: data
        };

        res.render("index", handlebarsObject);

    });

});

// create
router.post("/api/burgers", function(req, res) {

    burger.create(["burger_name"], [req.body.burger_name], function(result) {

        res.json({ id: result.insertId});

    });

});

// update
router.put("/api/burgers/:id", function(req, res) {
    
    let condition = "id = " + req.params.id;

    burger.update(
        {devoured: req.body.devoured},
        condition,
        function(result) {
            
            if (result.changedRows === 0) {
                return res.status(404).end();
            } 

            res.status(200).end();

        }
    );

})

module.exports = router;