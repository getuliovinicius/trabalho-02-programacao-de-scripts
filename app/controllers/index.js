// app/controllers/index.js

module.exports = function(app) {

    var controller = {};

    controller.index = function(req, res) {
        res.render('index', {nome: 'Automóveis'});
    };
    
    return controller;

}