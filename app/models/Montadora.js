// app/model/Montadora.js

function Montadora(connection) {
	this._connection = connection;
};

Montadora.prototype.lista = function(data, callback) {
	this._connection.query('SELECT * FROM Montadora', callback);
};

Montadora.prototype.adiciona = function(data, callback) {
	this._connection.query('INSERT INTO Montadora SET ? ', data, callback);
};

module.exports = function(app) {
	return Montadora;
};