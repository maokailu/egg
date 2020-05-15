'use strict';

const Controller = require('egg').Controller;
const { renderToString } = require('react-dom/server');
const App  = require('../../client/dist/app.js');
const React = require('react');

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
        const content = renderToString(React.createElement(App.default));
        ctx.body = content;
    }
}

module.exports = HomeController;
