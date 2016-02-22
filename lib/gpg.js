var debug = require('debug')('gpg lib iface');
var execSync = require("child_process").execSync;

function getPrivateKeysIdentities() {
    debug("getting available local private keys");
    var keysRaw = execSync("ruby ./identidades-privadas.rb", {cwd: __dirname}).toString();
    var keysAsArray = keysRaw.split("\n").filter(function(el) {
        return el != null && el.length > 0;
    });
    console.log(keysAsArray);
    return {meta:{}, keys:keysAsArray};
}

function getKnownPubKeys() {
    debug("getting available local private keys");
    var keysRaw = execSync("ruby ./identidades-publicas.rb", {cwd: __dirname}).toString();
    var keysAsArray = keysRaw.split("\n").filter(function(el) {
        return el != null && el.length > 0;
    });
    console.log(keysAsArray);
    return {meta:{}, keys:keysAsArray};
}

function encryptForEmail(msg, destinationEmail) {
    var command = "ruby ./encrypt.rb " +destinationEmail+" \" "+msg+"\"";
    var encripted = execSync(command, {cwd: __dirname}).toString();
    debug("encripting message to " + destinationEmail);
    return encripted;
}

function decrypt(msg) {
    var command = "ruby ./decrypt.rb  \""+ msg + "\"";
    var decripted = execSync(command, {cwd: __dirname}).toString();
    return decripted;
}

module.exports = {
    getPrivateKeysIdentities: getPrivateKeysIdentities,
    encryptForEmail: encryptForEmail,
    decrypt: decrypt,
    getKnownPubKeys: getKnownPubKeys
}
