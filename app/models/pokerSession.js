var db = require('../data/pokerSessions');
var shortId = require('shortid');

exports.create = function() {
    var sessionId = shortId.generate();
    db.save();

    return sessionId;
};
