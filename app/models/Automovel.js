// app/model/Automovel.js

function Automovel(connection) {
	this._connection = connection;
};

Automovel.prototype.lista = function(data, callback) {
	this._connection.query('SELECT A.CodAutomovel AS CodAutomovel, A.Modelo AS Modelo, M.Montadora AS Montadora, A.Ano AS Ano, A.Categoria AS Categoria, A.TipoCombustivel AS TipoCombustivel, A.Motor AS Motor, A.Quantidade AS Quantidade, A.Preco AS Preco FROM Automovel AS A INNER JOIN Montadora AS M ON A.CodMontadora = M.CodMontadora', callback);
};

Automovel.prototype.listaMontadora = function(data, callback) {
	this._connection.query('SELECT CodMontadora, Montadora FROM Montadora', callback);
}; 

Automovel.prototype.adiciona = function(data, callback) {
	this._connection.query('INSERT INTO Automovel SET ? ', data, callback);
};

module.exports = function(app) {
	return Automovel;
};