import React from "react";

interface UseCounterProps {
    initialValue?: number;
}

interface UseCounterRes {
    increment: (num: number) => void;
    decrement: (num: number) => void;
    counter: number;
}

/**
 * A custom React hook that memoizes a function callback.
 * @param callback The callback function to memoize.
 * @returns The memoized callback function.
 */

export const useCounter = ({ initialValue = 0 }: UseCounterProps): UseCounterRes => {
    const [counter, setCounter] = React.useState(initialValue);

    const increment = (num = 1): void => {
        setCounter((prev) => prev + num);
    };
    const decrement = (num: number): void => {
        setCounter((prev) => prev - num);
    };

    return {
        increment,
        decrement,
        counter,
    };
};
