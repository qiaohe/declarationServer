var declarationController = require('./controller/declareController');
var dictController = require('./controller/dictController');
module.exports = [
    {
        method: "post",
        path: "/api/declarations",
        handler: declarationController.postDeclaration
    },
    {
        method: "post",
        path: "/api/declarations/:id",
        handler: declarationController.applyRules
    },
    {
        method: "get",
        path: "/api/dict/categories/:id",
        handler: dictController.getCategories
    },
    {
        method: "get",
        path: "/api/dict/commodities",
        handler: dictController.getCommodities
    },
    {
        method: "get",
        path: "/api/dict/categories/:id/commodities",
        handler: dictController.getCommoditiesByCategory
    },
    {
        method: "get",
        path: "/api/dict/commodities/:id/suppliers",
        handler: dictController.getSuppliers
    }

];
