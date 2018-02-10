var models = require('../models');

var headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'application/json'
};

module.exports = {
  messages: { // a function which handles a get request for all messages
    get: function (req, res) {
      models.messages.get();
      console.log('Success GET!');
      res.set(headers).status(200).send(JSON.stringify(data));
    }, 
    post: function (req, res) { // a function which handles posting a message to the database
      models.messages.post();
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

