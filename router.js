var express = require('express');
var Log = require('log');
var scrumValues = require('./app/api/scrumValues');
var scrumMembers = require('./app/api/scrumMembers');
var scrumMemberValues = require('./app/api/scrumMemberValues');
var reveal = require('./app/api/reveal');
var pokerSessions = require('./app/api/pokerSessions');

var router = express.Router();

var log = new Log();

router.use((req, res, next) => {
    log.info('Routing to ' + req.path);
    next();
});

router.get('/', (req, res) => {
    res.json({ message: 'api root' });
});

// CREATE SESSION
router.use('/pokerSessions', pokerSessions);

// SCRUM MEMBER MANAGEMENT
router.use('/:sessionId/scrumMembers', scrumMembers);

// GET POSSIBLE SCRUM POINT VALUES
router.use('/scrumValues', scrumValues);

// SELECT SCRUM POINT VALUES
router.use('/:sessionId/scrumMemberValues', scrumMemberValues);

// REVEAL SCRUM VALUES
router.use('/:sessionId/scrumMemberValues/reveal', reveal);

// DO VALUES NEED TO BE DISCUSSED

// SET CONSENSUS VALUE

module.exports = router;
