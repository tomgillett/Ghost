var frontend    = require('../controllers/frontend');

module.exports = function (server) {
    /*jslint regexp: true */

    // ### Frontend routes
    /* TODO: dynamic routing, homepage generator, filters ETC ETC */
    server.get('/rss/', frontend.rss);
    server.get('/rss/:page/', frontend.rss);
    server.get('/page/:page/', frontend.homepage);
    // Only capture the :slug part of the URL
    // This regex will always have two capturing groups,
    // one for date, and one for the slug.
    // Examples:
    //  Given `/plain-slug/` the req.params would be ['', 'plain-slug']
    //  Given `/2012/12/24/plain-slug/` the req.params would be ['2012/12/24', 'plain-slug']
    server.get(/^\/([0-9\/]*)([^\/.]*)\/$/, frontend.single);
    server.get('/', frontend.homepage);
};