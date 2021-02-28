const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "2g7pXzH&oA5S",
    database: "burgers_db"
});

connection.connect(err => {

    if (err) {
        console.error("Error connecting:" + err.stack);
        return;
    }

    console.log("Connected as ID " + connection.threadId);

});

module.exports = connection;