"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _aluno = require("../model/aluno");

var _aluno2 = _interopRequireDefault(_aluno);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AlunoService = function () {
  function AlunoService() {
    _classCallCheck(this, AlunoService);
  }

  _createClass(AlunoService, [{
    key: "inserir",
    value: async function inserir(req, res) {
      // preenchendo model
      var model = new _aluno2.default(req.body);

      // validando
      var validation = model.validateSync();

      if (validation) {
        return res.status(400).json(validation);
      }

      try {
        model = await model.save();

        if (!model) {
          return res.status(400).json({ message: "A inserção resultou em erro" });
        }

        return res.status(200).json(model);
      } catch (error) {
        return res.status(500).json(error);
      }
    }
  }, {
    key: "alterar",
    value: async function alterar(req, res) {
      // preenchendo model
      var model = new _aluno2.default(req.body);

      // validando
      var validation = model.validateSync();

      if (validation) {
        return res.status(400).json(validation);
      }

      if (!req.params.id) {
        return res.status(400).json({ message: "O id do aluno não foi informado!" });
      }

      var body = req.body,
          id = req.params.id;


      body._id = id;

      try {
        model = await _aluno2.default.findOneAndUpdate({ _id: body._id }, model, { new: true });

        if (!model) {
          return res.status(400).json({ message: "A alteração resultou em erro" });
        }

        return res.status(200).json(model);
      } catch (error) {
        return res.status(500).json(error);
      }
    }
  }, {
    key: "remover",
    value: async function remover(req, res) {
      if (!req.params.id) {
        return res.status(400).json({ message: "O id do aluno não foi informado!" });
      }
      try {
        var result = await _aluno2.default.findOneAndRemove({ _id: req.params.id });
        return res.status(200).json(result);
      } catch (error) {
        return res.status(500).json({ error: error });
      }
    }
  }, {
    key: "buscarTodos",
    value: async function buscarTodos(req, res) {
      try {
        var results = await _aluno2.default.find();
        return res.status(200).json(results);
      } catch (error) {
        return res.status(500).json(error);
      }
    }
  }, {
    key: "buscarUm",
    value: async function buscarUm(req, res) {
      try {
        if (!req.params.id) {
          return res.status(400).json({ message: "O id do aluno não foi informado!" });
        }

        var result = await _aluno2.default.findOne({ _id: req.params.id });

        if (result) {
          return res.status(200).json(result);
        } else {
          return res.status(404).json({ message: "O aluno não foi encontrado!" });
        }
      } catch (error) {
        return res.status(500).json(error);
      }
    }
  }]);

  return AlunoService;
}();

exports.default = AlunoService;