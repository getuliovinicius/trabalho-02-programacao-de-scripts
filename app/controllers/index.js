// app/controllers/index.js

module.exports = function(app) {

    var controller = {};

    controller.index = function(req, res) {
        res.render('index', {
            tituloSite: 'Consecionária NodeJS',
            tituloPagina: 'Consecionária NodeJS',
            tituloConteudo: 'Bem vindo!'
        });
    };
    
    return controller;

}