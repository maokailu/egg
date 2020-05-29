'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller, middleware } = app;

    const gzip = middleware.gzip({ threshold: 1024 });
    router.get('/list.js', gzip, controller.home.list);
    router.get('/', gzip, controller.home.index);
    // router.get('/api/getCurrentCityByCityNum', gzip, controller.home.index);
    // router.get('/index.js', gzip, controller.home.index);
    // router.get('http://localhost:7001/api/getCurrentCityByCityNum', gzip, controller.home.index);
};
