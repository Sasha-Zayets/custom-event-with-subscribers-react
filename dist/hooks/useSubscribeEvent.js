"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSubscribeEvent = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = require("react");
var _customEventWithSubscribers = require("custom-event-with-subscribers");
const useSubscribeEvent = function useSubscribeEvent(eventName) {
  let defaultState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const isMount = (0, _react.useRef)(null);
  const [state, setState] = (0, _react.useState)(defaultState);
  (0, _react.useEffect)(() => {
    isMount.current = true;
    _customEventWithSubscribers.customEvent.subscribe(eventName, data => {
      isMount.current && setState(data);
    });
    return () => {
      isMount.current = false;
      _customEventWithSubscribers.customEvent.unsubscribe(eventName);
    };
  }, [eventName]);
  return {
    state,
    setState
  };
};
exports.useSubscribeEvent = useSubscribeEvent;