const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

// all
router.get("/", (req, res) => {

})

// create
router.post("/api/burgers", (req, res) => {

})

// update
router.put("/api/burgers/:id", (req, res) => {
    
})


module.exports = router;