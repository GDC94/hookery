import * as React from "react";

type AnyFunction<T> = (newState: T) => void;

function useEvent<T>(callback: (newState: T) => void): AnyFunction<T> {
    return callback;
}

export function useShallowMergedState<T>(initialState: T): [T, AnyFunction<T>] {
    const [state, setState] = React.useState(initialState);

    const setter: AnyFunction<T> = useEvent((newState: T) => {
        setState((prevState) => ({
            ...prevState,
            ...newState,
        }));
    });

    return [state, setter] as const;
}
