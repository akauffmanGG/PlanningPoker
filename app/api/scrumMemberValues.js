var express = require('express');
var Log = require('log');
var router = express.Router();
var scrumMember = require('../models/scrumMember');
var scrumMemberValue = require('../models/scrumMemberValue');

var log = new Log();

/**
* PUT
**/
router.put('/:memberId/:value', (req, res) => {
    var member = scrumMember.getById(req.params.memberId);
    var value = parseInt(req.params.value);

    if(!member) {
        res.status(404);
        res.send('Unable to find scrum member.');
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

/**
* GET
**/
router.get('/', (req, res) => {
    res.json({ members: scrumMemberValue.get() });
});

/**
* GET by ID
**/
router.get('/:memberId', (req, res) => {
    var member = scrumMember.getById(req.params.memberId);

    if(!member) {
        res.status(404);
        res.send('Unable to find scrum member.');
        return;
    }

    var value = scrumMemberValue.getForMember(member);
    if(!value) {
        res.status(404);
        res.send('Unable to find value for scrum member.');
    } else {
        res.json({ scrumMemberValue: value });
    }

});

module.exports = router;
