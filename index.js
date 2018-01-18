'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var guage_js = _interopDefault(require('guage.js'));

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();









var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var GuageJs = function (_Component) {
  inherits(GuageJs, _Component);

  function GuageJs() {
    classCallCheck(this, GuageJs);
    return possibleConstructorReturn(this, (GuageJs.__proto__ || Object.getPrototypeOf(GuageJs)).apply(this, arguments));
  }

  createClass(GuageJs, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.updateCanvas();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.updateCanvas();
    }
  }, {
    key: 'updateCanvas',
    value: function updateCanvas() {
      var opts = {
        angle: 0.15, /// The span of the gauge arc
        lineWidth: 0.44, // The line thickness
        pointer: {
          length: 0.9, // Relative to gauge radius
          strokeWidth: 0.035 // The thickness
        },
        colorStart: '#6FADCF', // Colors
        colorStop: '#8FC0DA', // just experiment with them
        strokeColor: '#E0E0E0' // to see which ones work best for you
      };
      var gauge = new Gauge(this.refs.canvas).setOptions(opts);
    }
  }, {
    key: 'render',
    value: function render() {
      return React__default.createElement('canvas', { ref: 'canvas' });
    }
  }]);
  return GuageJs;
}(React.Component);

module.exports = GuageJs;
