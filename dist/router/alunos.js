"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AlunoService = require("../service/AlunoService");

var _AlunoService2 = _interopRequireDefault(_AlunoService);

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var router = _express2.default.Router();
var service = new _AlunoService2.default();

var AlunoRouter = function () {
  function AlunoRouter() {
    _classCallCheck(this, AlunoRouter);
  }

  _createClass(AlunoRouter, null, [{
    key: "config",
    value: function config() {
      router.post("/", service.inserir);
      router.put("/:id", service.alterar);
      router.get("/", service.buscarTodos);
      router.get("/:id", service.buscarUm);
      router.delete("/:id", service.remover);
      return router;
    }
  }]);

  return AlunoRouter;
}();

exports.default = AlunoRouter;