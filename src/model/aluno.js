const mongoose = require( 'mongoose' )

const alunoSchema = new mongoose.Schema( {
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    idade: {
        type: Number,
        required: true,
        min: 1,
        max: 120
    }
} )

module.exports = mongoose.model( "alunos", alunoSchema )