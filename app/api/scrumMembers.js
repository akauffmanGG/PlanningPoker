var express = require('express');
var Log = require('log');
var router = express.Router();
var scrumMember = require('../models/scrumMember');

var log = new Log();

/**
* GET
**/
router.get('/', (req, res) => {
    log.info('Getting scrum members');
    res.json({ members: scrumMember.get() });
});

/**
* GET by ID
**/
router.get('/:id', (req, res) => {
    var member = scrumMember.getById(req.params.id);

    if(!member) {
        res.status(404);
        res.send('Unable to find scrum member.');
        log.info('Unable to get scrum member for id %s', req.params.id);
    } else {
        log.info('Got scrum member for id %s', req.params.id);
        res.json(member);
    }

});

/**
* DELETE by ID
**/
router.delete('/:id', (req, res) => {
    var member = scrumMember.getById(req.params.id);

    if(!member) {
        res.status(404);
        res.send('Unable to find scrum member.');
        log.info('Unable to get scrum member for id %s', req.params.id);
    } else {
        scrumMember.delete(member);
        res.json({ message: 'Scrum member ' + member.name + ' deleted.'});
        log.info('Deleted scrum member for id %s', req.params.id);
    }
});

/**
* POST
**/
router.post('/', (req, res) => {
    scrumMember.create(req.body.name, req.body.isScrumMaster);

    log.info('Created scrum member %s', req.body.name);
    res.json({ message: 'Scrum member ' + req.body.name + ' created.'});
});

module.exports = router;
