'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alunos = require('../router/alunos.js');

var _alunos2 = _interopRequireDefault(_alunos);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RouterConfig = function () {
    function RouterConfig() {
        _classCallCheck(this, RouterConfig);
    }

    _createClass(RouterConfig, null, [{
        key: 'config',
        value: function config(app) {
            app.use('/alunos', _alunos2.default.config());
        }
    }]);

    return RouterConfig;
}();

exports.default = RouterConfig;