// server.js

/**
 * Servidor com o módulo Express
 */
var http = require('http');
var express = require('express');
var app = require('./config/express')();

http.createServer(app).listen(app.get('port'), function() {
    console.log('Servidor NodeJS com o módulo Express escutando na porta: ' + app.get('port'));
});