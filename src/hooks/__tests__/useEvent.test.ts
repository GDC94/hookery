import { act, renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { useEvent } from "../useEvent";

describe("Testing on useEvent", () => {
    it("[TEST useEvent] Should execute the callback", () => {
        const fn = vi.fn();
        const { result } = renderHook(() => useEvent(fn));

        act(() => {
            result.current();
        });
        expect(fn).toHaveBeenCalledTimes(1);
    });

    it("[TEST useEvent] Should memoize the handler", () => {
        const fn = vi.fn();
        const { result, rerender } = renderHook(() => useEvent(fn));
        const eventHandlerOne = result.current;

        rerender();
        const eventHandlerTwo = result.current;

        expect(eventHandlerOne).toBe(eventHandlerTwo);
        eventHandlerOne();
        expect(fn).toHaveBeenCalledOnce();
    });
});
