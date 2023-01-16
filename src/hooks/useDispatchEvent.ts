import { useCallback } from 'react';
import customEvent from 'custom-event-with-subscribers';

export const useDispatchEvent = () => useCallback((eventName: string, params?: any) => {
    customEvent.dispatch(eventName, params);
}, []);
