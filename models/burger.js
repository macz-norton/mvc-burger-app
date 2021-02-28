const orm = require("../config/orm");

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
    update: (value, id, callback) => {

        orm.update("burgers", value, id, (res) => {

            callback(res);

        });

    }

}

module.exports = burger;