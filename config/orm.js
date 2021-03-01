const connection = require("./connection");

function printQuestionMarks(num) {
    let array = [];

    for (let i = 0; i < num; i++) {
        array.push("?");
    }

    return array.toString();
}

function objToSql(object) {

    let array = [];

    for (let key in object) {
        let value = object[key];

        if(Object.hasOwnProperty.call(object, key)) {

            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            
            array.push(key + "=" + value);
        }
    }

    return array.toString();

}

let orm = {

    // selectAll()
    all:(tableInput, callback) => {
        let queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },

    // insertOne()
    create: (table, cols, value, callback) => {
        let queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(value.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, value, (err, result) => {

            if (err) {
                throw err;
            }

            callback(result);

        });

    },

    // updateOne()
    update: (table, objColVals, condition, callback) => {

        let queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        // console.log("ORM 1 " + queryString);
        // console.log("ORM 2" + id);

        connection.query(queryString, (err, result) => {

            if (err) {
                throw err;
            }

            callback(result);

        });

    }

}


module.exports = orm;