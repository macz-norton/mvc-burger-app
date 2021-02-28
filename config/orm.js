const connection = require("./connection");

function printQuestionMarks(num) {
    const array = [];

    for (let i = 0; i < num; i++) {
        array.push("?");
    }

    return array.toString();
}

function objToSql(object) {

    const array = [];

    for (const key in object) {
        const value = object[key];

        if(Object.hasOwnProperty.call(object, key)) {

            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            
            array.push(key + "=" + value);
        }
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
    create: (table, cols, vals, callback) => {
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
    update: (table, objColVals, condition, callback) => {

        const queryString = "UPDATE" + table;

        queryString += "SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, (err, result) => {

            if (err) {
                throw err;
            }

            callback(result);

        });

    }

}


module.exports = orm;