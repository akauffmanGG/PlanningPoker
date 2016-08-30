var _ = require('underscore');

/**
* Mock storage for now. Map of member ids to scrum values
**/
var memberValues = {};

exports.save = (scrumMember, scrumValue) => {
    if(memberValues[scrumMember.id]) {
        throw new Error('Value already exists for this member.');
    }

    memberValues[scrumMember.id] = scrumValue;
};

exports.update = (scrumMember, scrumValue) => {
    if(!memberValues[scrumMember.id]) {
        throw new Error('Member value does not exist.');
    }

    memberValues[scrumMember.id] = scrumValue;
};

exports.delete = (scrumMember) => {
    delete memberValues[scrumMember.id];
};

exports.fetchAll = () => {
    return memberValues;
};

exports.fetch = (scrumMember) => {
    return memberValues[scrumMember.id];
};
