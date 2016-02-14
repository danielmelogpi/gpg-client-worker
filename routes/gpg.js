/*jslint node:true*/
var express = require('express');
var router = express.Router();
var gpginterface = require("../lib/gpg");

router.post('/encrypt', function (req, res, next) {
    "use strict";
    res.send(gpginterface.encryptForEmail(req.body.msg, req.body.email));
});

router.post('/decrypt', function (req, res, next) {
    "use strict";
    res.send(gpginterface.decrypt(req.body.msg));
});

router.get('/keys', function (req, res, next) {
    "use strict";
    res.send(gpginterface.getLocalKeysEmails());
});


module.exports = router;
