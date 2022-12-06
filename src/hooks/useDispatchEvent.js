import React, { useCallback } from 'react';
import customEvent from 'custom-event-with-subscribers';

export const useDispatchEvent = () => useCallback((eventName, params) => {
    customEvent.dispatch(eventName, params);
}, []);
