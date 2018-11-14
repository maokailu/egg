'use strict';
const Service = require('egg').Service;
class CommentsService extends Service {
  async find(row) {
    const comments = await this.app.mysql.select('comments', { limit: row });
    return comments;
  }
}

module.exports = CommentsService;
