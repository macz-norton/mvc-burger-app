const orm = require("../config/orm.js");

const burger = {

    // all
    all: (callback) => {

        orm.all("burgers", (res) => {

            callback(res);

        })

    },

    // create
    create: (cols, value, callback) => {

        orm.create("burgers", cols, value, (res) => {

            callback(res);

        });

    },

    // update
    update: (objColsVals, condition, callback) => {

        orm.update("burgers", objColsVals, condition, (res) => {

            callback(res);

        });

    }

}

module.exports = burger;