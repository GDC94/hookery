import { render, screen } from "@testing-library/react";
import { describe, it, vi } from "vitest";

import { withTracking } from "../withTracking";

const MockComponent = (): JSX.Element => <div>Mock component</div>;

const intersectionObserverMock = () => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
});

window.IntersectionObserver = vi.fn().mockImplementation(intersectionObserverMock);

describe("withTracker", () => {
    it("renders the base component wrapped with a ref div", () => {
        const ComponentWithTracker = withTracking(MockComponent);

        render(<ComponentWithTracker />);
        screen.getByText(/mock component/i);
    });
});
