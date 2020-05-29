'use strict';

const Controller = require('egg').Controller;
const React = require('react');
const { renderToString } = require('react-dom/server');
const App  = require('../../client/dist/app.js');
// const List  = require('../../client/dist/list.js');
const path = require('path');
const fs = require('fs');

class HomeController extends Controller {
    async index() {
        const { ctx } = this;
        // const row = ctx.params.row || 10;
        // const comments = await ctx.service.comment.find(row);
        ctx.set('Access-Control-Allow-Origin', 'http://localhost:8082');
        ctx.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
        ctx.set('Access-Control-Allow-Headers', 'Content-Type');
        // ctx.set('Content-Type:', 'application/json;charset=UTF-8');
        // ctx.set('Access-Control-Expose-Headers', 'Content-Type');
        ctx.set('access-control-max-age', '86400');

        // cache
        ctx.set('cache-control', 'max-age=3600000');
        ctx.set('expires', new Date(new Date().getTime() + 10000000000));
        ctx.set('etag', '1');
        ctx.set('last-modified', new Date());
        // const viewData = {};
        // viewData.schema = '/index';
        // viewData.controller = 'http://127.0.0.1:7001/index.js';
        // this.ctx.render('index', viewData);
        // await this.ctx.render('index', viewData);

        // cookie
        const options = {
            // 安全
            httponly: false,
            sameSite: 'Strict',
            secure: false,

            // 作用域
            domain: 'localhost',
            path: '/',
            // 作用时间
            maxAge: 111000000
        };
        ctx.cookies.set('username', 'mkl', options);
        // jsx -> html string
        const component =  renderToString(React.createElement(App.default));
        const content = `
        <html>
          <head>
            <title>ssr</title>
          </head>
          <body>
            <div id="root">${component}</div>
            <script src="/list.js"></script>
          </body>
        </html>`;
        ctx.body = content;
    }
    async list() {
        const { ctx } = this;
        ctx.status = 200;
        const filePath = '/client/dist/list';
        ctx.attachment(filePath);
        ctx.set('Content-Type', 'application/octet-stream');

        const buf = await fs.createReadStream(filePath);
        ctx.body = buf;
        // ctx.attachment('../../client/dist/list.js');
    }
}

module.exports = HomeController;
