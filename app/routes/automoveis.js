// app/routes/index.js

module.exports = function(app) {

    var controller = app.controllers.automoveis;
   
    app.route('/automoveis')
        .get(controller.lista)
        .post(controller.adiciona);

};