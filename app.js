const mysql = require('mysql');
const insert = require('./insert-record');
const readData = require('./read-record');
const updateUser = require('./update-record');
const deleteData = require('./delete-record');

var express = require('express');
var app = express();
// connection configurations
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'riddhi',
    password: 'riddhi@123',
    dialect: "mysql",
    port    :'3306',
    database: 'demo'
});

// connect to database
connection.connect(function (err) {
    if (err) throw err
    console.log('You are now connected with mysql database...')
});

//cmd line arguments
var arguments = process.argv;

if(arguments[2] == "insert"){
insert.insert(connection , arguments[3],arguments[4],arguments[5] );
} else if (arguments[2] == "update") {
updateUser.updateUser(connection,arguments[3],arguments[4],arguments[5],arguments[6]);
}else if (arguments[2] == "delete") {
    deleteData.deleteData(connection,arguments[3]);
}
var data = readData.readData(connection);

app.get('/users', function (req, res) {
    readData.readData(connection).then(result => {
        res.json(result);
    }).catch(err => {
        console.log(err);
        res.sendStatus(500);
    });
});
app.listen(8000, function () {
  console.log('Example app listening on port 8000!');
});