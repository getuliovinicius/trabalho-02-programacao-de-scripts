-- CREATE DATABASE psTrabalho02

-- USE psTrabalho02

/*
 * Caso não exista um banco, os dois comandos acima podem ser úteis para criá-lo.
 */

CREATE TABLE Montadora (
	CodMontadora INT NOT NULL AUTO_INCREMENT,
	Montadora VARCHAR(30) UNIQUE,
	Email CHAR(60),
	Telefone CHAR(15),
	Cidade VARCHAR(30),
	Estado CHAR(2),
	Pais CHAR(30),
	Representante VARCHAR(100),
	PRIMARY KEY (CodMontadora)
)

CREATE TABLE Automovel (
	CodAutomovel INT NOT NULL AUTO_INCREMENT,
	CodMontadora INT NOT NULL,
	Modelo VARCHAR(30) UNIQUE,
	Ano CHAR(4),
	Categoria VARCHAR(30),
	TipoCombustivel VARCHAR(30),
	Motor CHAR(3),
	Quantidade INT,
	Preco DECIMAL(10,2),
	PRIMARY KEY (CodAutomovel),
	FOREIGN KEY (CodMontadora) REFERENCES Montadora (CodMontadora)
)