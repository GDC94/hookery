import * as React from "react";

import { useEvent, useIsInView } from "./hooks";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

// Cuando el componente esté en el viewport quiero ejecutar isInView SOLO UNA VEZ

/*
  * Con este HOC me puedo asegurar que un componente que quiero trackear, solo se ejecute una vez cuando el mismo se hace visible y no mas.
  * La ref ya no vivivra en el componente sino en el HOC que ahora podra ser utilizado en todos lados
  ? Probar su implementacion con postHog
*/

// ? https://drive.google.com/drive/u/0/folders/1ITyHHYxHqrSFUd0lN5ObyO41XYoShvon min 1h48

export const withTracking = <P extends Props>(BaseComponent: React.ComponentType<P>) => {
    return function Component(props: P) {
        const ref = React.useRef<HTMLDivElement>(null);
        const isInView = useIsInView(ref);

        const hasSeen = React.useRef(false);

        const event = useEvent(() => {
            console.log("element has been seen");
        });

        React.useEffect(() => {
            if (isInView && !hasSeen.current) {
                event();
                hasSeen.current = true;
            }
        }, [isInView, event]);

        return (
            <div ref={ref}>
                <BaseComponent {...props} />
            </div>
        );
    };
};
