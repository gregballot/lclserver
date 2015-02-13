/*
** LCL Hub Project
** Super base de données de l'espace
*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema
;
var Customer = new Schema({
    name:		String,
    agency:		String,
    age:		Number,
    childs_id:		[String],
    accounts:		[String],
    status:		String,
    updated_at:		{ type: Date, default: Date.now }
});

var Account = new Schema({
    customer_id:	String,
    name:		String,
    ceiling:		Number,
    overdraft:		Number,
    rate:		Number,
    sold:		{ type: Number, default: 0},
    updated_at:		{ type: Date, default: Date.now }
});

var Question = new Schema({
    title:		String,
    focused_status:	String,
    asked_customers:	[String],
    answered_yes:	[String],
    answered_no:	[String],
    updated_at:		{ type: Date, default: Date.now }
});

mongoose.model('Customer', Customer);
mongoose.model('Account', Account);
mongoose.model('Question', Question);
mongoose.connect('mongodb://localhost/api');
