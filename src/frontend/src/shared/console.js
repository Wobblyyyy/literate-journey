/*
 * This file is a part of the achat project's source code.
 * Everything here is under the MIT source code license.
 */

/*
 * A custom implementation of a console to use with achat.
 * You can use this in any custom plugins or bots you may append
 * to achat's functionality. Note that you'd probably be better off if you
 * just use achat chat's built-in logging system. Probably.
 */

let Console = {
    console: [],
    write: function (prefix, msg) {
        this.console.push(Colors.convert('&f> ' + prefix + msg));
    },
    severe: function (msg) {
        let prefix = '&4[ERROR] ';
        this.write(prefix, msg);
    },
    error: function (msg) {
        let prefix = '&c[ERROR] ';
        this.write(prefix, msg);
    },
    warn: function (msg) {
        let prefix = '&e[WARN] ';
        this.write(prefix, msg);
    },
    log: function (msg) {
        let prefix = '&f[LOG] ';
        this.write(prefix, msg);
    },
    success: function (msg) {
        let prefix = '&a[SUCCESS] ';
        this.write(prefix, msg);
    },
    execute: function (cmd) {
        this.error(`Unknown command: &4${cmd}`);
    }
};
