/*
** Question model : question.server.model.js
**
** LCL Back-end
** ballot_g
*/

var mongoose = require('mongoose');
var Question = mongoose.model('Question');

// TODO question operations

exports.createQuestion = function(req, res) {
    Question.findOne({ title: req.param('title') }, function(error, question) {
	if (!question) {
	    console.log("Creating question");
	    question = new Question({
		title:			req.param('title'),
		asked_customers:	null,
		answered_yes:		null,
		answered_no:		null,
		updated_at:		Date.now()
	    }).save( function( err, ques, count ){
		res.end(ques.toString());
	    });
	} else {
	    res.end(question.toString());
	}
    });
};

exports.answerQuestion = function(req, res) {
    Question.findOne({ _id: req.param('_id') }, function(error, question) {
	if (!question) {
	    res.status(404).send();
	} else {	    
	    res.end();
	}
    });
}
