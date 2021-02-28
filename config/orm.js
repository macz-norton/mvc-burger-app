const connection = require("./connection");

const orm = {

    // selectAll()
    all:(tableInput, callback) => {
        const queryString = "SELECT * FROM" + tableInput + ";";
        connection.query(querySTring, (err, result) => {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },

    // insertOne()

    // updateOne()

}


module.exports = orm;