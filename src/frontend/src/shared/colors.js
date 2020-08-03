/*
 * This file is a part of the achat project's source code.
 * Everything here is under the MIT source code license.
 */

/*
 * This file is a part of the achat project's source code.
 * Everything here is under the MIT source code license.
 */

/*
 * This file is a part of the achat project's source code.
 * Everything here is under the MIT source code license.
 */

/*
 * In order to combat issues I was having before with color codes in achat,
 * I created this file to simplify the creation of color-coded messages.
 */

// We might have to implement these at some other point. Oh well.
const Codes = {
    REGULAR: [],
    BOLD: [
        '<b>',
        '</b>'
    ],
    ITALIC: [
        '<i>',
        '</i>'
    ],
};

let Colors = {
    template: [
        '<span style="color=_COLOR_">',
        '</span>'
    ],
    // All of the color codes we have to use. Yay.
    // We might want to have users be able to 'unlock' these color codes?
    // In order to use a certain color, however, we have to check to make
    // sure that the user has the permission to use it.
    // Maybe implement something like Bukkit's permission system?
    colorCodes: {
        // Minecraft's color codes
        // Look up Minecraft color codes if you (for whatever reason) want
        // to figure out how to use them.
        // You could also use regular color codes... like a normal person...
        // Or these!
        '&r': '#000000',
        '&0': '#000000',
        '&1': '#0000AA',
        '&2': '#00AA00',
        '&3': '#00AAAA',
        '&4': '#AA0000',
        '&5': '#AA00AA',
        '&6': '#FFAA00',
        '&7': '#AAAAAA',
        '&8': '#555555',
        '&9': '#5555FF',
        '&a': '#55FF55',
        '&b': '#55FFFF',
        '&c': '#FF5555',
        '&d': '#FF55FF',
        '&e': '#FFFF55',
        '&f': '#FFFFFF',

        // achat's color codes
        // Custom color codes. Some of these are the same exact colors as
        // the Minecraft ones.
        '[black]': '#000000',
        '[white]': '#FFFFFF',
        '[grey]': '#6e6e6e',
        '[dark_grey]': '#555555',
        '[light_grey]': '#AAAAAA',
        '[green]': '#12b800',
        '[light_green]': '#61ff4f',
        '[dark_green]': '#0d8200',
        '[blue]': '#2930ff',
        '[light_blue]': '#666bff',
        '[dark_blue]': '#0000AA',
        '[red]': '#AA0000',
        '[light_red]': '#FF5555',
        '[dark_red]': '#9c0000',
        '[purple]': '#9200db',
        '[light_purple]': '#be3dff',
        '[dark_purple]': '#5a0087',
        '[cyan]': '#00AAAA',
        '[yellow]': '#FFFF55',
        '[orange]': '#FFAA00',
        '[seafoam_green]': '#93E9BE',
    },
    // We have to implement this at some later point.
    regularCodes: {
        'reset': [
            '&r',
            '[regular]',
            '[reset]'
        ],
        'bold': [
            '&l',
            '[bold]',
            '[b]'
        ],
        'italics': [
            '&o',
            '[italics]',
            '[i]'
        ],
    },
    // Do some client-side computations to convert a normal message into one
    // which contains colors. We want to save computational power on the server,
    // so we do everything we can on the client. Note that we still have to
    // actually fix the message on the server, so the client can't just "nope"
    // right out of checks that make sure the messages are allowed.
    convert: function (message) {
        // Here we have a list of end tags we need to add to the end of the
        // string to make sure it won't mess up anything else on the site.
        // We append these to the end of the string in reverse order.
        let ending = [];
        forEachJson(this.colorCodes, function (key, value) {
            while (message.includes(key)) {
                ending.push(Colors.template[1]);
                message = message.replace(
                    key,
                    Colors.template[0].replace(
                        '_COLOR_',
                        value
                    )
                );
            }
        });
        ending.reverse();
        forEachArray(ending, function (value, index) {
            message += value;
        });
        return message;
    }
};
