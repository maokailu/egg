'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, middleware } = app;

  const gzip = middleware.gzip({ threshold: 1024 });
  router.get('/', gzip, controller.home.index);
};
