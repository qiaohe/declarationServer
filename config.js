'use strict';

module.exports = {
    server: {
        name: 'Declaration Server restful api',
        version: '0.0.1',
        host: '127.0.0.1',
        port: 8080
    },
    db: {
        host: 'www.nearbyme.cn',
        port: '3306',
        user: 'trader',
        password: 'heqiao75518',
        debug: false,
        multipleStatements: true,
        dateStrings: true,
        database: 'commodityTraderDB',
        charset: 'UTF8MB4_GENERAL_CI'
    }
};

