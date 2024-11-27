const mysql = require('mysql');
const bodyParser = require('body-parser');
const insert = require('./models/insert-record');
const readData = require('./models/read-record');
const updateUser = require('./models/update-record');
const deleteData = require('./models/delete-record');

var express = require('express');
var app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
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

var data = readData.readData(connection);

app.get('/users', function (req, res) {
    readData.readData(connection).then(result => {
        res.json(result);
        return res;
    }).catch(err => {
        console.log("error",err);
        res.sendStatus(500);
    });
});

app.get('/add', (req, res) => {
    res.render('add-item'); 
  });

  app.get('/edit/:id', (req, res) => {
    const id = req.params.id;
     readData.readDataById(connection, id).then(result => {
        console.log(result);
        res.render('edit',{ result }); 
    });
  });
  app.get('/delete/:id', (req, res) => {
    const id = req.params.id;
    deleteData.deleteData(connection,id);
    res.redirect('/');
  });

  app.post('/add', async (req, res) => {
    console.log(req.body);
    const { name, description, contact } = req.body;
    insert.insert(connection , name , description,contact );
    res.redirect('/');
  });

  app.post('/edit/:id', async (req, res) => {
    console.log(req.body);
    const id = req.params.id;
    console.log(id);
    const { name, description, contact } = req.body;
    updateUser.updateUser(connection , id,name , description,contact  );
    res.redirect('/');
  });

app.get('/', function (req, res) {
    readData.readData(connection).then(result => {
        res.render('ui', { result });
    }).catch(err => {
        console.log(err);
        res.sendStatus(500);
    });
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

module.exports = app;