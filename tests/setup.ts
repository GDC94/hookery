import { cleanup } from "@testing-library/react-hooks";
import { afterEach, beforeEach,vi } from "vitest";
// toBeInTheDocument()

// import * as matchers from '@testing-library/jest-dom/matchers'

// expect.extend(matchers)

beforeEach(() => {
    vi.useFakeTimers();
});

afterEach(() => {
    cleanup();
    vi.clearAllMocks();
});
