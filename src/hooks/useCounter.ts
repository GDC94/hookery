import React from "react";

interface UseCounterProps {
    initialValue?: number;
}

interface UseCounterRes {
    increment: (num: number) => void;
    decrement: (num: number) => void;
    counter: number;
}

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
