/**
 * Created by johnson1 on 29/03/2017.
 */

var declarationDAO = require('../dao/declarationDAO');

module.exports = {
    getCategories: function (req, res, next) {
        var id = req.params.id;
        declarationDAO.findCategoriesBy(id).then(function (categories) {
            res.send({ret: 0, data: categories});
        }).catch(function (err) {
            res.send({ret: 1, message: err.message});
        });
        return next();
    },
    getCommodities: function (req, res, next) {
        declarationDAO.findCommodities().then(function (commodities) {
            res.send({ret: 0, data: commodities});
        }).catch(function (err) {
            res.send({ret: 1, message: err.message});
        });
        return next();
    },

    getCommoditiesByCategory: function(req, res, next) {
        declarationDAO.findCommoditiesByCategory(+req.params.id).then(function (commodities) {
            res.send({ret: 0, data: commodities});
        }).catch(function (err) {
            res.send({ret: 1, message: err.message});
        });
        return next();
    },
    getSuppliers: function(req, res, next){
        declarationDAO.findSuppliers(req.params.id).then(function (suppliers) {
            res.send({ret: 0, data: suppliers});
        }).catch(function (err) {
            res.send({ret: 1, message: err.message});
        });
        return next();
    }
}