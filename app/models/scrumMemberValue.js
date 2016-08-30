var valuesDb = require('../data/scrumValues');
var db = require('../data/scrumMemberValues');

exports.createOrUpdate = function(scrumMember, scrumValue) {
    var values = valuesDb.fetchAll();
    if(values.indexOf(scrumValue) < 0) {
        throw new Error('Scrum Value ' + scrumValue + ' is not valid.');
    }

    if(db.fetch(scrumMember)) {
        db.update(scrumMember, scrumValue);
    } else {
        db.save(scrumMember, scrumValue);
    }
};

exports.get = function() {
    return db.fetchAll();
};

exports.getForMember = function(scrumMember) {
    return db.fetch(scrumMember);
};
