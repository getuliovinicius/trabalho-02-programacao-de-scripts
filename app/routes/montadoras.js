// app/routes/index.js

module.exports = function(app) {

    var controller = app.controllers.montadoras;
   
    app.route('/montadoras')
        .get(controller.lista)
        .post(controller.adiciona);

};