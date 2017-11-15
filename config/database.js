// config/database.js

var mysql = require('mysql');

function createDBConnection() {
	return mysql.createConnection(
        {
            host: 'localhost',
            user: 'gerente_app',
            password: 'G3r3nt3_4pp',
            database: 'cursoNode1'
        }
    );
};

// wrapper
module.exports = function() {
	return createDBConnection;
};