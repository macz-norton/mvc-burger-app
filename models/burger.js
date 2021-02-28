const orm = require("../config/orm");

const burger = {

    // all
    all: (callback) => {

        orm.all("burgers", (res) => {

            callback(res);

        })

    },

    // create
    create: (cols, vals, callback) => {

        orm.create("burgers", cols, vals, (res) => {

            callback(res);

        });

    },

    // update
    update: (objColVals, condition, callback) => {

        orm.update("burgers", objColVals, condition, (res) => {

            callback(res);

        });

    }

}

module.exports = burger;