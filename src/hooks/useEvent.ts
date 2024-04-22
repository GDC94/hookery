import * as React from "react";

type AnyFunction = (...args: unknown[]) => unknown;

export function useEvent<T extends AnyFunction>(callback: T): T {
    const ref = React.useRef<AnyFunction>(() => {});

    React.useLayoutEffect(() => {
        ref.current = callback;
    }, [callback]);

    return React.useCallback((...args: unknown[]) => ref.current(...args), []) as T;
}
