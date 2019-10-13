const AlunoService = require( "../service/AlunoService" );
const express = require( "express" );

const router = express.Router();
const service = new AlunoService();

// class AlunoRouter {
//   static config() {
//     router.post( "/", service.inserir );
//     router.put( "/:id", service.alterar );
//     router.get( "/", service.buscarTodos );
//     router.get( "/:id", service.buscarUm );
//     router.delete( "/:id", service.remover );
//     return router;
//   }
// }

module.exports = () => {
  router.post( "/", service.inserir );
  router.put( "/:id", service.alterar );
  router.get( "/", service.buscarTodos );
  router.get( "/:id", service.buscarUm );
  router.delete( "/:id", service.remover );
  return router;
};