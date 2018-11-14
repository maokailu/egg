'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const row = ctx.params.row || 10;
    const comments = await ctx.service.comment.find(row);
    ctx.body = comments;
  }
}

module.exports = HomeController;
