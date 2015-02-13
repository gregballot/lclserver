/*
** Customer controller : customer.server.controller.js
**
** LCL Back-end
** ballot_g
*/

// TODO question operations

var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

exports.signInCustomer = function(req, res) {
    Customer.findOne({ name: req.param('name') }, function(error, customer) {
	if (!customer) {
	    res.status(404).send();
	} else {
	    res.end(customer.toString());
	}
    });
}
