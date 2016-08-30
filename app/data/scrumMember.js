var _ = require('underscore');

/**
* Mock storage for now. All members stored in an array.
**/
var members = [];

exports.save = (scrumMember) => {
    members.push(scrumMember);
};

exports.delete = (scrumMember) => {
    members = _.without(members, scrumMember);
};

exports.fetchAll = (filter) => {
    if(!filter) {
        return members;
    }

    return _.where(members, filter);
};

exports.fetch = (filter) => {
    return _.findWhere(members, filter);
};
