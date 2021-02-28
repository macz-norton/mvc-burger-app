const { query } = require("./connection");
const connection = require("./connection");

function printQuestionMarks(num) {
    const array = [];

    for (let i = 0; i < num; i++) {
        array.push("?");
    }

    return array.toString();
}

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
    create: (table, cols, vals, callback) {
        const queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, (err, result) => {

            if (err) {
                throw err;
            }

            callback(result);

        });

    },

    // updateOne()

}


module.exports = orm;