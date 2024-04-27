import { act, renderHook } from "@testing-library/react-hooks";
import { describe, expect, it, vi } from "vitest";

import { useEvent } from "../useEvent";

describe("Testing on useEvent hook", () => {
    it("[TEST useEvent] Should execute the callback", () => {
        const fnMocked = vi.fn();
        const { result } = renderHook(() => useEvent(fnMocked));

        act(() => {
            result.current();
        });
        expect(fnMocked).toHaveBeenCalledTimes(1);
    });

    it("[TEST useEvent] Should memoize the handler", () => {
        const fnMocked = vi.fn();
        const { result, rerender } = renderHook(() => useEvent(fnMocked));
        const eventHandlerOne = result.current;

        rerender();
        const eventHandlerTwo = result.current;

        expect(eventHandlerOne).toBe(eventHandlerTwo);
        eventHandlerOne();
        expect(fnMocked).toHaveBeenCalledOnce();
    });
});
