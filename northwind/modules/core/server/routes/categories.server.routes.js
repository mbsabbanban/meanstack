'use strict';

module.exports = function(app) {
  // Routing logic   

  var categories = require('../controllers/categories.server.controller');

  app.route('/categories')
        .get(categories.list)
	.post(categories.create);
};
