var db = require('../db'); //get or post info using db.something
var express = require('express');
var mysql = require('mysql');



module.exports = {
  messages: {
    get: function (callback) {
      console.log(mysql.query);
      db();

      // db.connection.query('SELECT * FROM messages', function(err, results, fields) {
      //   if (err) {
      //     console.log('error');
      //     throw err;
      //   } else {
      //     console.log('THIS thy RESULT: ', results);
      //     if (callback) { 
      //       callback(results);
      //     }
      //   }
      // });
    }, // a function which produces all the messages
    post: function () {

    } 
     
    // a function which can be used to insert a message into the database
  },
  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

module.exports.messages.get();