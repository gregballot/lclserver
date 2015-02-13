/*
** Server routes : account.server.routes.js
**
** LCL Back-end
** ballot_g
*/

module.exports = function(app) {
    var accountModel = require('../models/account.server.model');

    app.post('/account/create', accountModel.createAccount);
};
