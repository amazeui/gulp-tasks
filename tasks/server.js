'use strict';

var browserSync = require('browser-sync').create();

// Task: dev server
// add tag then publish to npm and push to git
module.exports = function(gulp, config) {
  gulp.task('server', function() {
    browserSync.init(config.browserSync);

    if (config.bsWatches) {
      gulp.watch(config.bsWatches, browserSync.reload);
    }
  });
};
