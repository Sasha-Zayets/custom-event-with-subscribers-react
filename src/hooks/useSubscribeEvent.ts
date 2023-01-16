import { useState, useEffect, useRef } from 'react';
import customEvent from 'custom-event-with-subscribers';

export const useSubscribeEvent = (eventName: string, defaultState: object = {}) => {
    const isMount = useRef(null);
    const [state, setState] = useState(defaultState);

    useEffect(() => {
        isMount.current = true;
        customEvent.subscribe(eventName, (data: any) => {
            isMount.current && setState(data);
        });

        return () => {
            isMount.current = false;
            customEvent.unsubscribe(eventName);
        };
    }, [eventName]);

    return { state, setState };
};
