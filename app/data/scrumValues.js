var _ = require('underscore');

var values = [
    1,
    2,
    3,
    5,
    8,
    13,
    20,
    40
];

exports.fetchAll = (filter) => {
    if(!filter) {
        return values;
    }

    return _.where(values, filter);
};

exports.fetch = (filter) => {
    return _.findWhere(members, filter);
};
