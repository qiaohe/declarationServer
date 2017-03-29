/**
 * Created by johnson1 on 29/03/2017.
 */

var declarationDAO = require('../dao/declarationDAO');
// var math = require('mathjs');

module.exports = {
    postDeclaration: function (req, res, next) {
        var declaration = req.body;
        declarationDAO.insert(declaration).then(function (result) {
            declaration.id = result.insertId;
            res.send({ret: 0, data: declaration});

        }).catch(function (err) {
            res.send({ret: 1, message: err.message});
        });
        return next();
    },

    applyRules: function (req, res, next) {
        var declarationId = req.params.id;
        var rule = {
            expression: 'deliverPlace == "上海"'
        };

        // declarationDAO.findDeclarationById(declarationId).then(function(result){
        //     math.eval
        //
        // })


        return next();

    }


}