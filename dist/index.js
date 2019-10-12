'use strict';

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _database = require('./config/database');

var _database2 = _interopRequireDefault(_database);

var _routes = require('./config/routes');

var _routes2 = _interopRequireDefault(_routes);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

// middlewares do express
app.use((0, _cors2.default)({ origin: ['http://localhost:3000'] }));
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use((0, _morgan2.default)('combined'));

//Demais configurações
_routes2.default.config(app);
_database2.default.config();
_dotenv2.default.config();
require('mongoose').Promise = global.Promise;