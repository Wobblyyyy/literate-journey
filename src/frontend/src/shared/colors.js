/*
 * This file is a part of the achat project's source code.
 * Everything here is under the MIT source code license.
 */

/*
 * In order to combat issues I was having before with color codes in achat,
 * I created this file to simplify the creation of color-coded messages.
 */

//----------------------------------------------------------------------------//
// USING THIS AS A DEVELOPER                                                  //
// As you could probably guess, color codes and different colored fonts are   //
// incredibly important in a text-based program such as achat. Because all of //
// achat's internal workings and components are laid bare for anybody to see  //
// (and in this case, use), I'm providing this handy-dandy guide to using     //
// all of this stuff in your own mods and plugins.                            //
//----------------------------------------------------------------------------//
// USING COLOR CODES                                                          //
// All of the color codes are quite nicely listed in the Colors.colorCodes    //
// section of this document. Assuming you already know how to use the color   //
// codes to do swaggy and epic stuff with them, we move now move on...        //
//----------------------------------------------------------------------------//
// CONVERTING COLOR-CODED MESSAGES TO USABLE MESSAGES                         //
// To put it simply, you use Colors.convert(message) to convert a color-coded //
// message into a regular one. Note that the output message is written in     //
// HTML markup form and should be used in that way. I utilize SPAN elements   //
// to make all of this magic happen.                                          //
//----------------------------------------------------------------------------//

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
        // Or these!                  //--------------------------------------//
        '&r': '#000000',              // BLACK                                //
        '&0': '#000000',              // BLACK                                //
        '&1': '#0000AA',              // DARK BLUE                            //
        '&2': '#00AA00',              // DARK GREEN                           //
        '&3': '#00AAAA',              // CYAN                                 //
        '&4': '#AA0000',              // RED                                  //
        '&5': '#AA00AA',              // PURPLE                               //
        '&6': '#FFAA00',              // ORANGE                               //
        '&7': '#AAAAAA',              // LIGHT GREY                           //
        '&8': '#555555',              // DARK GREY                            //
        '&9': '#5555FF',              // BLUE                                 //
        '&a': '#55FF55',              // LIGHT GREEN                          //
        '&b': '#55FFFF',              // LIGHT BLUE                           //
        '&c': '#FF5555',              // LIGHT RED                            //
        '&d': '#FF55FF',              // LIGHT PURPLE                         //
        '&e': '#FFFF55',              // STRAIGHT-UP YELLOW                   //
        '&f': '#FFFFFF',              // WHITE...                             //
                                      //--------------------------------------//
        // achat's color codes        // Man, I have to say, I really do like //
        // Custom color codes. Some   // the way I formatted this. Who cares  //
        // of these are the same      // about the code, the formatting       //
        // exact colors as            // looks hella nice!                    //
        // the Minecraft ones.        //--------------------------------------//
        '[black]': '#000000',         // BLACK                                //
        '[white]': '#FFFFFF',         // WHITE                                //
        '[grey]': '#6e6e6e',          // GREY                                 //
        '[dark_grey]': '#555555',     // DARK GREY                            //
        '[light_grey]': '#AAAAAA',    // LIGHT GREY                           //
        '[green]': '#12b800',         // GREEN                                //
        '[light_green]': '#61ff4f',   // LIGHT GREEN                          //
        '[dark_green]': '#0d8200',    // DARK GREEN                           //
        '[blue]': '#2930ff',          // REGULAR BLUE                         //
        '[light_blue]': '#666bff',    // LIGHT BLUE                           //
        '[dark_blue]': '#0000AA',     // DARK BLUE                            //
        '[red]': '#AA0000',           // RED                                  //
        '[light_red]': '#FF5555',     // LIGHT RED                            //
        '[dark_red]': '#9c0000',      // DARK RED                             //
        '[purple]': '#9200db',        // REGULAR PURPLE                       //
        '[light_purple]': '#be3dff',  // LIGHT PURPLE                         //
        '[dark_purple]': '#5a0087',   // DARK PURPLE                          //
        '[cyan]': '#00AAAA',          // CYAN                                 //
        '[yellow]': '#FFFF55',        // YELLOW                               //
        '[orange]': '#FFAA00',        // ORANGE                               //
        '[seafoam_green]': '#93E9BE'  // SEAFOAM GREEN                        //
                                      //--------------------------------------//
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
    // We gotta prime these sexy ass motherfucking messages for use anywhere
    // within achat, including...
    //  - Sending messages
    //  - Switching language
    //  - Preparing buttons to be displayed
    convert: function (message) {
        // Here we have a list of end tags we need to add to the end of the
        // string to make sure it won't mess up anything else on the site.
        // We append these to the end of the string in reverse order.
        let ending = [];
        // We to see if the message contains any of the strings contained within
        // the color codes section. If any of them are contained, we replace the
        // color code and add the ending to the very back of the message.
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
        // Reverse the ending so we can append it in the right order.
        ending.reverse();
        // Add each of the endings to the message so it's entirely complete.
        forEachArray(ending, function (value, index) {
            message += value;
        });
        // Return the entire message.
        // We also format the message.
        return replaceAll(message, '  ', ' ').trim();
    }
};
