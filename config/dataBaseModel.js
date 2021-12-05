const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '',
  port: 3307,
  user: '',
  password: '',
  database: ''
});

module.exports = connection;