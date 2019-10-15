// Importando mongoose
const mongoose = require( 'mongoose' );

// Exportando função que faz a conexão com o banco de dados (O mongoose também é singleton)
module.exports = async () => {
    try {
        await mongoose.connect( process.env.STRING_URL, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: true,
            useUnifiedTopology: true
        } );
        console.log( "Conectado com sucesso!" )
    } catch ( error ) {
        console.log( `Erro ao conectar com o banco de dados: ${error}` )
    }
}