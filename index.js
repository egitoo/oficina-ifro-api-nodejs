// Importando Express e middlewares
const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const morgan = require( 'morgan' );
const cors = require( 'cors' );

// Importando configurações de DB, rotas e variáveis de ambiente
const configDatabase = require( './src/config/database' );
const configRouter = require( './src/config/routes' );
require( 'dotenv' ).config()

// Criando singleton do servidor Express
const app = express();

// Usando middlewares do Express
app.use( cors( { origin: [ 'http://localhost:3000' ] } ) )
app.use( bodyParser.json() )
app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( morgan( 'combined' ) );

// Executando configurações de DB e rotas
configDatabase()
require( 'mongoose' ).Promise = global.Promise
configRouter( app )

// Colocando servidor para rodar na porta 3001
app.listen( 3001, () => {
  console.log( "Servidor iniciado com sucesso!" )
} )
