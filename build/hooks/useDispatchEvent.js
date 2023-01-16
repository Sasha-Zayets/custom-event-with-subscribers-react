import { useCallback } from 'react';
import customEvent from 'custom-event-with-subscribers';
export var useDispatchEvent = function () { return useCallback(function (eventName, params) {
    customEvent.dispatch(eventName, params);
}, []); };
