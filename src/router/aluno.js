const service = require( "../service/aluno" );
const express = require( "express" );

const router = express.Router();

module.exports = () => {
  router.post( "/", service.inserir );
  router.put( "/:id", service.alterar );
  router.get( "/", service.buscarTodos );
  router.get( "/:id", service.buscarUm );
  router.delete( "/:id", service.remover );
  return router;
};