// app/controllers/montadoras.js

module.exports = function(app) {
    
    var controller = {};
    var connection = app.models.Database();

    controller.adiciona = function(req, res) {
        // var dados = {
        //     'Montadora' : req.body.Montadora,
        //     'Email' : req.body.Email,
        //     'Telefone' : req.body.Telefone,
        //     'Cidade' : req.body.Cidade,
        //     'Estado' : req.body.Estado,
        //     'Pais' : req.body.Pais,
        //     'Representante' : req.body.Representante
        // };

        var dados = req.body;

        // console.log(req.body);

        var Montadora = new app.models.Montadora(connection);		

        Montadora.adiciona(dados, function(error, result) {
            if(error) {
                res.json(error);
            } else {
                // connection.end();
                res.redirect('/montadoras');
            }
        });

    }
    
    controller.lista = function(req, res) {

        var Montadora = new app.models.Montadora(connection);
		
		Montadora.lista(connection, function(error, result) {
            if(error) {
                res.json(error);
            } else {
                // connection.end();
                res.render('montadoras', {
                    tituloSite: "Consecionária NodeJS",
                    tituloPagina: 'Montadoras | Consecionária NodeJS',
                    tituloConteudo: "Montadoras",
                    lista: result
                });
            }          
        });
    
    };
    
    // connection.end();
    return controller;

}