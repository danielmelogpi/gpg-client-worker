var debug = require('debug')('gpg lib iface');
var execSync = require("child_process").execSync;

function getLocalKeysEmails() {
    debug("getting available local private keys");
    var keysRaw = execSync("ruby ./identidades-privadas.rb", {cwd: __dirname}).toString();
    var keysAsArray = keysRaw.split("\n").filter(function(el) {
        return el != null && el.length > 0;
    });
    console.log(keysAsArray);
    return {meta:{}, keys:keysAsArray};
}

function encryptForEmail(msg, destinationEmail) {
    var nodev = execSync("node -v").toString();
    debug("encripting message to " + destinationEmail + nodev);
    return msg+"encripted" + nodev;
}

function decrypt(msg, destinationEmail) {
    debug("decripting message to " + destinationEmail);
    return msg+"decripted";
}

module.exports = {
    getLocalKeysEmails: getLocalKeysEmails,
    encryptForEmail: encryptForEmail,
    decrypt: decrypt
}
