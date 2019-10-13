// Importando mongoose
const mongoose = require( 'mongoose' );

// Exportando função que faz a conexão com o banco de dados (O mongoose também é singleton)
module.exports = () => {
    mongoose
        .connect( process.env.STRING_URL,
            {
                useNewUrlParser: true,
                useCreateIndex: true,
                useFindAndModify: true,
                useUnifiedTopology: true
            } )
        .then( res => {
            console.log( "MongoDB conectado com sucesso!" )
        } )
        .catch( err => {
            console.log( err )
        } )
}