'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressSimpleErrors = require('express-simple-errors');

var _expressSimpleErrors2 = _interopRequireDefault(_expressSimpleErrors);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import bodyParser from 'body-parser';
// import cors from 'cors';
var app = (0, _express2.default)();

// app middleware
// app.use(cors());
// app.use(bodyParser.json({type: 'application/json'}));
// app.disable('etag');

app.use('/', (0, _routes2.default)());

// const errorHandler = new ErrorHandler();

// app.use((err, req, res, next) => {
//   if (err.validator) {
//     err.name = 'ValidationError';
//     err.code = 400;
//   }
//   next(err);
// });

// errorHandler.setHandler('ValidationError', function validationHandler (err, stack) {
//   const res = {};
//   res.status = 'Error';
//   res.message = `Schema Validation Error: ${err.message}`;
//   res.code = err.code;
//   if (stack) res.stackTrace = err.stack;
//   return res;
// });

// app.use(errorHandler.middleware());

exports.default = app;
//# sourceMappingURL=server.js.map