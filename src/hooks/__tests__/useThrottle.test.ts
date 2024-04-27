import { act, renderHook } from "@testing-library/react-hooks";
import { afterEach, describe, expect, it, vi } from "vitest";

import { useThrottle } from "../useThrottle";

describe("Testing on useThrottle hook", () => {
    afterEach(() => {
        vi.clearAllMocks();
    });
    const fn = vi.fn();

    it("[TEST useThrottle] Should throttle the callback with the specified delay", () => {
        const delay = 1_000;
        const { result } = renderHook(() => useThrottle(fn, delay));

        act(() => {
            result.current();
            result.current();
            result.current();
        });
        expect(fn).toHaveBeenCalledOnce();

        vi.advanceTimersByTime(1_200);
        // We advance in time 1.2s so that the function can be executed.
        act(() => {
            result.current();
        });
        expect(fn).toHaveBeenCalledTimes(2);
    });
});
