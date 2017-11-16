// app/controllers/automoveis.js

module.exports = function(app) {
    
    var controller = {};
    var connection = app.models.Database();

    controller.adiciona = function(req, res) {

        var dados = req.body;

        // console.log(req.body);

        var Automovel = new app.models.Automovel(connection);		

        Automovel.adiciona(dados, function(error, result) {
            if(error) {
                res.json(error);
            } else {
                // connection.end();
                res.redirect('/automoveis');
            }
        });

    }
    
    controller.lista = function(req, res) {

        var Automovel = new app.models.Automovel(connection);
		
		Automovel.lista(connection, function(error, result1) {
            if(error) {
                res.json(error);
            } else {
                Automovel.listaMontadora(connection, function(error, result2){
                    if(error) {
                        res.json(error);
                    } else {
                        res.render('automoveis', {
                            tituloSite: "Consecionária NodeJS",
                            tituloPagina: 'Automóveis | Consecionária NodeJS',
                            tituloConteudo: "Automóveis",
                            lista: result1,
                            listaMontadora: result2 
                        });
                    }            
                });
            }          
        });

        // connection.end();
    
    };
    
    // connection.end();
    return controller;

}