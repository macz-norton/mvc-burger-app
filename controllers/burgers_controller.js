const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();

// all
router.get("/", (req, res) => {

    burger.all((data) => {

        let handlebarsObject = {
            burgers: data
        };

        // console.log(handlebarsObject);
        res.render("index", handlebarsObject);

    });

});

// create
router.post("/api/burgers", (req, res) => {

    burger.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], (res) => {

        res.json({ id: res.insertId});

    });

});

// update
router.put("/api/burgers/:id", (req, res) => {
    
    let condition = "id = " + req.params.id;

    // console.log("BC 1 " + id)
    // console.log("BC 2" + req.params.id)
    // console.log("BC 3" + req.body.devoured)

    burger.update(
        {devoured: req.body.devoured},
        condition,
        (res) => {
            
            if (res.changedRows === 0) {
                return res.status(404).end();
            }

            res.status(200).end();

        }
    );

})

module.exports = router;