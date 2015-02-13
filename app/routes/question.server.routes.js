/*
** Server routes : account.server.routes.js
**
** LCL Back-end
** ballot_g
*/

module.exports = function(app) {
    var questionModel = require('../models/question.server.model');

    app.post('/question/create', questionModel.createQuestion);
    app.post('/question/answer', questionModel.answerQuestion);
};
