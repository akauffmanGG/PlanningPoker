var express = require('express');
var Log = require('log');
var router = express.Router();
var scrumValues = require('../models/scrumValues');

var log = new Log();

router.get('/', (req, res) => {
    log.info('Getting scrum values');
    res.json({ values: scrumValues.get() });
});

module.exports = router;
