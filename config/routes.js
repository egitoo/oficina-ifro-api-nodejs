import AlunoRouter from '../router/alunos.js'

export default class RouterConfig {
    static config(app) {
        app.use('/alunos', AlunoRouter.config())
    }
}