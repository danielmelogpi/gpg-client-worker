var debug = require('debug')('gpg lib iface');

function getLocalKeysEmails() {
    debug("getting available local private keys");
    return {meta:{}, keys:["chave1", "chave2"]};
}

function encryptForEmail(msg, destinationEmail) {
    debug("encripting message to " + destinationEmail);
    return msg+"encripted";
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
