const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

// all
router.get("/", (req, res) => {

    burger.all((data) => {

        const handlebarsObject = {
            burgers: data
        };

        console.log(handlebarsObject);
        res.render("index", handlebarsObject);

    });

});

// create
router.post("/api/burgers", (req, res) => {

    burger.create(["name", "isDevoured"], [res.body.burger_name, req.body.isDevoured], (res) => {

        res.json({ id: result.insertId});

    });

});

// update
router.put("/api/burgers/:id", (req, res) => {
    
    const condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update(
        {isDevoured: req.body.isDevoured},
        condition,
        (result) => {
            
            if (result.changedRows === 0) {
                return res.status(404).end();
            }

            res.status(200).end();

        }
    );

})


module.exports = router;