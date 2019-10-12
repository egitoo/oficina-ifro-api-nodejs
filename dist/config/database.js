"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DatabaseConfig = function () {
    function DatabaseConfig() {
        _classCallCheck(this, DatabaseConfig);
    }

    _createClass(DatabaseConfig, null, [{
        key: "config",
        value: function config() {
            _mongoose2.default.connect(process.env.STRING_URL, {
                useNewUrlParser: true,
                useCreateIndex: true,
                useFindAndModify: true
            }).then(function (res) {
                console.log("Conectado com sucesso!");
            }).catch(function (err) {
                console.log(err);
            });
        }
    }]);

    return DatabaseConfig;
}();

exports.default = DatabaseConfig;