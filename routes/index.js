/**
 * Module dependencies.
 */
'use strict';
var parse = require('co-body');
var render = require('../lib/render');


// And now... the route definitions
module.exports = function(app, route) {
    // get request
    app.use(route.get('/index', index));
    app.use(route.get('/', index));
  }
  /**
   *Post Index
   */
function* index() {

  this.body = yield render('front/home/index', {
    message: "网站正在紧急开发中。。。"
  });
}