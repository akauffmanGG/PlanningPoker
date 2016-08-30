var express = require('express');
var Log = require('log');
var router = express.Router();
var pokerSession = require('../models/pokerSession');

var log = new Log();

router.post('/', (req, res) => {
    log.info('Creating a new planning poker session');
    res.json({ session: pokerSession.create() });
});

module.exports = router;
