AVALIAÇÃO: TRABALHO-02 DE PROGRAMAÇÃO DE SCRIPTS
================================================

Este é um repositório para a avaliação do "Trabalho-02" da Disciplina de **Programação de Scripts** do 5º Semestre do curso de Analise e Desenvolvimento de Sistemas da Fatec de Franca.

## Requisitos

+ [Requisitos do Trabalho](documentacao/mds/Avaliação 3 - Implentação listatimes.pdf)
+ NodeJS
+ Git
+ Bower
+ MySQL Server

```
$ npm install bower -g
```

## Passo a passo

**Comandos para instalação**

```
$ git clone https://github.com/getuliovinicius/trabalho-02-programacao-de-scripts.git
$ cd programacao-de-scripts
$ npm install
$ bower install
```

Na sequencia, execute o arquivo `tabelas-do-banco.sql` em um terminal, ou se preferir, copie o código e execute em um cliente do MySQL.

Por fim, altere os dados da conexão no arquivo `app/models/Database.js` para os dados de sua conexão.

```js
function createDBConnection() {
	return mysql.createConnection(
        {
            host: 'localhost',
            user: 'gerente_app',
            password: 'G3r3nt3_4pp',
            database: 'psTrabalho02'
        }
    );
};
```

**Comando para executar a aplicação**

```
$ node server
```