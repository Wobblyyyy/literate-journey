/*
 * This file is a part of the achat project's source code.
 * Everything here is under the MIT source code license.
 */

/*
 * The last version of achat used a multi-page application type thing. I
 * decided I want to move away from multi-page applications, so, instead, I
 * used a single-page application. This means that everything on the website
 * is loaded into one single page. This is great for a couple reasons -
 * primarily, it means we don't have to do any loading past what we initially
 * load, and, secondarily, there's no delays (and everything seems entirely
 * seamless to the user). As a downside, however, more memory (and probably
 * CPU power) is used by a single-page application.
 */

// A list of all the routes we have at the moment. This is mostly used for
// the hideAll() function, which, as the name would indeed imply, hides all
// of the available routes. While we could just remember all the names
// manually, or whatever the fuck that means, we could also just store it in
// a variable. In case you couldn't tell, I chose to store it in the variable.
const routes = [
    'homepage',
    'index',
    'shared',
    'signin',
    'signout',
    'signup'
];

const lastRoute = 'lastRoute';

// A simple utility function to hide all of the different routes. We only
// ever want to show one at a time, so this should be called whenever the
// page is loaded.
function hideAll() {
    routes.forEach(function (sv) {
        _('$' + sv).fadeOut(500);
        setTimeout(function () {
            _('$' + sv).hide();
        }, 500);
    });
}

// Show a single page. Wow. Impressive, right? I know.
function show(route) {
    _('$' + route).show();
    _('$' + route).fadeIn(500);
}

// A function to be called whenever a route is changed.
function onRouteChange(route) {
    hideAll();
    show(route);
    Cookies.set(
        lastRoute,
        route,
        {
            'expiration': -1
        }
    );
}

// A function to be called whenever the page is loaded.
function onPageLoad() {
    if (routes.contains(Cookies.get(lastRoute))) {
        // A page has previously been loaded, default to loading that one.
        // As a practical application... If the user was using the homepage
        // right before they left the website last, we should go ahead and
        // make sure that said user is going to see the homepage as soon as
        // they load in. However, if they were using the signout page for
        // some reason right before they last unloaded the page, we will
        // show them that page immediately.
        onRouteChange(Cookies.get(lastRoute));
    } else {
        // No page has previously been loaded.
        onRouteChange('index');
    }
}
