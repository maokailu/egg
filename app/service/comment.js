'use strict';
const Service = require('egg').Service;
class CommentService extends Service {
  async find(row) {
    const comments = await this.app.mysql.select('comments', { limit: 50 });
    return comments;
  }
}

module.exports = CommentService;
