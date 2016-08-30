var shortid = require('shortid');
var db = require('../data/scrumMember');

exports.create = function(name, isScrumMaster) {
    var scrumMember = {
        id: shortid.generate(),
        name: name,
        isScrumMaster: isScrumMaster
    };

    db.save(scrumMember);
};

exports.get = () => {
    return db.fetchAll();
};

exports.getById = (id) => {
    return db.fetch({id});
};

exports.delete = (member) => {
    db.delete(member);
};
