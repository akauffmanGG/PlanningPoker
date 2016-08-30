var express = require('express');
var Log = require('log');
var router = express.Router();
var scrumMember = require('../models/scrumMember');
var scrumMemberValue = require('../models/scrumMemberValue');

var log = new Log();

/**
* PUT
**/
router.put('/', (req, res) => {
    var member = scrumMember.getById(req.params.memberId);
    var value = parseInt(req.params.value);

    if(!member) {
        res.status(404);
        res.send('Unable to find scrum member.');
        return;
    }

    if(!member.isScrumMaster) {
        res.status(403);
        res.send('Member does not have access to perform this operation.');
        return;
    }

    try {
        scrumMemberValue.createOrUpdate(member, value);
        res.json({ message: 'Scrum member value ' + value + ' created.'});
    } catch(e) {
        res.status(400);
        res.send('Unable to save scrum member value.');
        log.error(e);
    }
});

module.exports = router;
