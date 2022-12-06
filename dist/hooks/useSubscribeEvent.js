"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSubscribeEvent = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _customEventWithSubscribers = require("custom-event-with-subscribers");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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