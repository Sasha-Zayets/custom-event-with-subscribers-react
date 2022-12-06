"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDispatchEvent = void 0;
var _react = require("react");
var _customEventWithSubscribers = require("custom-event-with-subscribers");
const useDispatchEvent = () => (0, _react.useCallback)((eventName, params) => {
  _customEventWithSubscribers.customEvent.dispatch(eventName, params);
}, []);
exports.useDispatchEvent = useDispatchEvent;