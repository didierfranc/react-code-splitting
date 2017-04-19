'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Async = function (_React$Component) {
  _inherits(Async, _React$Component);

  function Async() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, Async);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Async.__proto__ || Object.getPrototypeOf(Async)).call.apply(_ref, [this].concat(args))), _this), _this.componentWillMount = function () {
      _this.props.load.then(function (c) {
        _this.C = c;_this.forceUpdate();
      });
    }, _this.render = function () {
      var componentProps = _this.props.componentProps;

      return _this.C ? _react2.default.createElement(_this2.C.default, componentProps) : null;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Async;
}(_react2.default.Component);

exports.default = Async;


Async.propTypes = {
  load: _propTypes2.default.instanceOf(Promise).isRequired
};
