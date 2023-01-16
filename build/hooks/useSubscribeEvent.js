import { useState, useEffect, useRef } from 'react';
import customEvent from 'custom-event-with-subscribers';
export var useSubscribeEvent = function (eventName, defaultState) {
    if (defaultState === void 0) { defaultState = {}; }
    var isMount = useRef(null);
    var _a = useState(defaultState), state = _a[0], setState = _a[1];
    useEffect(function () {
        isMount.current = true;
        customEvent.subscribe(eventName, function (data) {
            isMount.current && setState(data);
        });
        return function () {
            isMount.current = false;
            customEvent.unsubscribe(eventName);
        };
    }, [eventName]);
    return { state: state, setState: setState };
};
