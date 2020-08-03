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
 * To simplify the process of switching languages while using achat, we use a
 * nice, simple, little, and of course, sexy, file containing all of the
 * messages we will need anywhere. We use a messages file to make it so you can
 * just change the text of any area by changing a single line of code.
 * This file is to be included in every single page on the website, because it's
 * needed universally.
 * In order to create a fluid experience, we want to have a ticking system which
 * will periodically check to see if all of the language messages should be
 * updated.
 */

const Messages = {
    _EN: {
        chat: {
            type_a_message: 'type a message... or not...',
            message_too_long: 'Your message was too long to send!',
            message_too_short: 'Your message was too short to send!',
        },
        homepage: {
            groups: 'groups...',
            dms: 'direct messages...',
        },
        index: {
            about: 'achat was created in 2018 as a discord-like web-browser-based ' +
                'chat platform to be used on google\'s chromebooks. programmed, ' +
                'created, devised, and ultimately made into the sexy and wonderful ' +
                'website it is now, by colin robertson. everything here is open-source ' +
                'and free to use.',
            encryption: 'achat tries to use strong encryption to protect any and all ' +
                'of your private messages you may send on our website. we don\'t have ' +
                'a privacy policy, but given all of achat is (so far) just one 16 ' +
                '(or 17 if I forget to update it) year old kid, there\'s not much I ' +
                'can do with your data anyway.',
            help: 'want to help out with the development of achat? you can look up ' +
                'achat on github under the user "Wobblyyyy" and try to tackle a ' +
                'couple issues on there. another great tip to getting started is to ' +
                'add me on discord (wobblyyyy#6733).'
        },
        shared: {
            achat: 'achat',
            sign_up: 'create a new account',
            sign_in: 'log into an already existing account',
            splash_screens: [
                'version four! yay!',
                'now with extra splash screen messages!',
                'look at that sexy background... damn...',
                'does anybody even read these?',
                'made with much love <3:)'
            ]
        },
        authentication: {
            email: 'enter your email...',
            username: 'enter a unique & cool username...',
            password: 'enter a nice & strong password...',
            gender: {
                male: 'male',
                female: 'female',
                nonbinary: 'non-binary',
                other: 'other'
            }
        }
    }
};
