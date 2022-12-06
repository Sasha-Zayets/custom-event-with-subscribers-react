import React, { useState, useEffect, useRef } from 'react';
import { customEvent } from 'custom-event-with-subscribers';

export const useSubscribeEvent = (eventName, defaultState = {}) => {
    const isMount = useRef(null);
    const [state, setState] = useState(defaultState);

    useEffect(() => {
        isMount.current = true;
        customEvent.subscribe(eventName, (data) => {
            isMount.current && setState(data);
        });

        return () => {
            isMount.current = false;
            customEvent.unsubscribe(eventName);
        };
    }, [eventName]);

    return { state, setState };
};
