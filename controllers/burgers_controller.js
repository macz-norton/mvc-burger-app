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

})

// update
router.put("/api/burgers/:id", (req, res) => {
    
})


module.exports = router;