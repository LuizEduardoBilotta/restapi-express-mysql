const mysql = require('mysql');

const informationsDB = {
  host: 'localhost',
  port: 3306,
  user: '',
  password: '',
  database: 'agendapetshop'
};

const connection = mysql.createConnection({...informationsDB});

connection.on('connect', () => { 
  console.log(`[LOG]: Connected to the database: [${ informationsDB.database }] in port: [${ informationsDB.port }]`)
});
connection.on('error', (error) => { console.log(`[LOG] :Error when connecting to the database: [${ error.code }]`) });

module.exports = connection;