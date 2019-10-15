// Importando o router
const configAlunoRouter = require( '../router/aluno.js/index.js' )

// Exportando função que recebe como parâmetro o servidor Express, com isso ele define a rota base de alunos para o router
module.exports = app => {
    app.use( '/alunos', configAlunoRouter() )
};