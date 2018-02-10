var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
module.exports = function() {
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'student',
    database: 'chat',
    password: 'student'
  });
  // return con;
  
  connection.connect(function(err) {
    if (err) {
      throw err;
    } else {
      console.log('Connected');
    }
  });

  connection.query('SELECT * FROM messages', function(err, results, fields) {
    //console.log('testttt');
    if (err) {
      throw err;
    } else {
      //console.log('in QUERY SHOW MEEEEEE!!!');
      console.log('THIS thy RESULT: ', results);
    }
    
  });
};

module.exports();

// console.log(module.exports.connection);
// module.exports.db = db;