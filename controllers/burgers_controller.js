const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

// all
router.get("/", (req, res) => {

    burger.all((data) => {

        const handlebarsObject = {
            burgers: data
        };

        // console.log(handlebarsObject);
        res.render("index", handlebarsObject);

    });

});

// create
router.post("/api/burgers", (req, res) => {

    burger.create(["burger_name"], [res.body.burger_name], (res) => {

        res.json({ id: res.insertId});

    });

});

// update
router.put("/api/burgers/:id", (req, res) => {
    
    const id = req.params.id;

    console.log("BC 1 " + id)
    console.log("BC 2" + req.params.id)
    console.log("BC 3" + req.body.devoured)

    burger.update(
        {devoured: true},
        id,
        (result) => {
            
            if (result.changedRows === 0) {
                return res.status(404).end();
            }

            res.status(200).end();

        }
    );

})


module.exports = router;