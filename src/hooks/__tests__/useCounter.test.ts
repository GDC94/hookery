import { act, renderHook } from "@testing-library/react-hooks";
import { describe, expect, it } from "vitest";

import { useCounter } from "../useCounter";

describe("Testing on useCounter hook", () => {
    it("[TEST useCounter] Should increment and decrement counter properly", () => {
        const { result } = renderHook(() => useCounter({ initialValue: 0 }));

        expect(result.current.counter).toBe(0);
        act(() => {
            result.current.increment(1);
        });
        expect(result.current.counter).toBe(1);
        act(() => {
            result.current.decrement(1);
        });
        expect(result.current.counter).toBe(0);
    });
    it("[TEST useCounter] Should increment and decrement counter by given value", () => {
        const { result } = renderHook(() => useCounter({ initialValue: 5 }));

        expect(result.current.counter).toBe(5);
        act(() => {
            result.current.increment(5);
        });
        expect(result.current.counter).toBe(10);
        act(() => {
            result.current.decrement(20);
        });
        expect(result.current.counter).toBe(-10);
    });
});
