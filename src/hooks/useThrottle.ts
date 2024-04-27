import * as React from "react";

import { useEvent } from "./useEvent";

type AnyFunction = (...args: unknown[]) => unknown;

function throttle<T extends AnyFunction>(fn: T, delay: number) {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    return function throttledFn(...args: Parameters<T>) {
        if (timeoutId !== undefined) {
            return;
        }
        timeoutId = setTimeout(() => {
            timeoutId = undefined;
        }, delay);

        return fn(...args);
    };
}

export function useThrottle<T extends AnyFunction>(fn: T, delay: number): T {
    const event = useEvent(fn);

    return React.useMemo(() => throttle(event, delay), [event, delay]) as T;
}
