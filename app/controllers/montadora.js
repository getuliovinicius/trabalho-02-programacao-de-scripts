// app/controllers/montadora.js

module.exports = function(app) {

    var controller = {};

    controller.inscricao = function(req, res) {
        
        var dados = {
            'nome' : req.body.nome,
            'email' : req.body.email,
            'telefone' : req.body.telefone,
            'cidade' : req.body.cidade,
            'estado' : req.body.estado
        };

        var registro = JSON.stringify(dados);

        var jsonfile = require('jsonfile');
        
        var file = 'arquivos/montadora.json';
        
        jsonfile.writeFile(file, registro, {flag: 'a'}, function (err) {
            console.error(err);
        });

        res.redirect('/');

    }

    return controller;

}