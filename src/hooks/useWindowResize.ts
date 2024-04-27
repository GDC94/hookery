import * as React from "react";

import { canUseDOM } from "./useSafeLayoutEffect";
import { useThrottle } from "./useThrottle";

interface UseWindowsResize {
    width: number;
    height: number;
}

interface WindowObject {
    width: number;
    height: number;
}

export function useWindowsResize(): UseWindowsResize {
    if (!canUseDOM) throw new Error("cannot use useWindowsResize in a server environment");
    const [windowsSize, setWindowsSize] = React.useState<WindowObject>({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const handleResize = useThrottle((): void => {
        setWindowsSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    }, 2000);

    React.useLayoutEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return windowsSize;
}
