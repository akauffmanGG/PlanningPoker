var db = require('../data/scrumMemberValues');

exports.get = function() {
    return db.fetchAll();
};
