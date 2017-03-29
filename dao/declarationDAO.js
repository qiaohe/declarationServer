/**
 * Created by johnson1 on 29/03/2017.
 */

"use strict";
var db = require('../common/db');
var sqlMapping = require('./sqlMapping');

module.exports = {
    insert: function (declaration) {
        return db.query(sqlMapping.declaration.insert, declaration);
    },
    findCategoriesBy: function (id) {
        return db.query(sqlMapping.declaration.findCategoriesBy, id);

    },
    findCommodities: function () {
        return db.query(sqlMapping.declaration.findCommodities);
    },
    findRules: function (declarationId) {
        return db.query(sqlMapping.declaration.findRules);
    },
    findDeclarationById: function (declarationId) {
        return db.query(sqlMapping.declaration.findDeclarationById);
    },
    findCommoditiesByCategory: function (categoryId) {
        return db.query(sqlMapping.declaration.findCommoditiesByCategory, categoryId);
    },
    findSuppliers: function(commodityId) {
        return db.query(sqlMapping.declaration.findSuppliers, commodityId);

    }
}
