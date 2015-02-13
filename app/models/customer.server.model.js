/*
** Customer model : customer.server.model.js
**
** LCL Back-end
** ballot_g
*/

var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

// TODO Add method to link son to his mother's customer entry

exports.createCustomer = function(req, res) {
    Customer.findOne({ name: req.param('name') }, function(error, customer) {
	if (!customer) {
	    console.log("Creating user");
	    customer = new Customer({
		name:		req.param('name'),
		agency:		req.param('agency'),
		age:		req.param('age'),
		childs_id:	null,
		accounts:	null,
		status:		req.param('status'),
		updated_at:	Date.now()
	    }).save( function( err, cust, count ){
		res.end(cust.toString());
	    });
	} else {
	    res.end(customer.toString());
	}
    });
};
