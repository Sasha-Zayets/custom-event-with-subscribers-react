/// <reference types="react" />
export declare const useSubscribeEvent: (eventName: string, defaultState?: object) => {
    state: object;
    setState: import("react").Dispatch<import("react").SetStateAction<object>>;
};
