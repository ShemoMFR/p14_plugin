"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./styles/Modal.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* LIBRAIRIES */

/* CSS */
const Modal = props => {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, props.open ? /*#__PURE__*/_react.default.createElement("div", {
    className: "overlay",
    onClick: () => props.setOpen(false)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "txt"
  }, props.title), /*#__PURE__*/_react.default.createElement("h2", {
    className: "txt"
  }, props.body))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null));
};

var _default = Modal;
exports.default = _default;