const AlunoCRUDModel = require( '../model/aluno' )

module.exports = {
  async inserir( req, res ) {
    // preenchendo model
    let model = new AlunoCRUDModel( req.body );

    // validando
    let validation = model.validateSync();

    if ( validation ) {
      return res.status( 400 ).json( validation );
    }

    try {
      model = await model.save();

      if ( !model ) {
        return res.status( 400 ).json( { message: "A inserção resultou em erro" } )
      }

      return res.status( 200 ).json( model );
    } catch ( error ) {
      return res.status( 500 ).json( error );
    }
  },

  async alterar( req, res ) {
    if ( !req.params.id ) {
      return res.status( 400 ).json( { message: "O id do aluno não foi informado!" } );
    }
    let { body, params: { id } } = req;

    body._id = id;

    // preenchendo model
    let model = new AlunoCRUDModel( req.body );

    // validando
    let validation = model.validateSync();

    if ( validation ) {
      return res.status( 400 ).json( validation );
    }



    try {
      model = await AlunoCRUDModel.findOneAndUpdate( { _id: body._id }, model, { new: true } )

      if ( !model ) {
        return res.status( 400 ).json( { message: "A alteração resultou em erro" } )
      }

      return res.status( 200 ).json( model );
    } catch ( error ) {
      return res.status( 500 ).json( error );
    }
  },

  async remover( req, res ) {
    if ( !req.params.id ) {
      return res.status( 400 ).json( { message: "O id do aluno não foi informado!" } );
    }
    try {
      let result = await AlunoCRUDModel.findOneAndRemove( { _id: req.params.id } );

      if ( !result ) {
        return res.status( 404 ).json( { message: "Não foi possível deletar, o objeto não foi encontrado!" } )
      }

      return res.status( 200 ).json( result );
    } catch ( error ) {
      return res.status( 500 ).json( { error } );
    }
  },

  async buscarTodos( req, res ) {
    try {
      let results = await AlunoCRUDModel.find()
      return res.status( 200 ).json( results );
    } catch ( error ) {
      return res.status( 500 ).json( error )
    }
  },

  async buscarUm( req, res ) {
    try {
      if ( !req.params.id ) {
        return res.status( 400 ).json( { message: "O id do aluno não foi informado!" } );
      }

      let result = await AlunoCRUDModel.findOne( { _id: req.params.id } )

      if ( result ) {
        return res.status( 200 ).json( result )
      } else {
        return res.status( 404 ).json( { message: "O aluno não foi encontrado!" } );
      }
    } catch ( error ) {
      return res.status( 500 ).json( error )
    }
  }
}