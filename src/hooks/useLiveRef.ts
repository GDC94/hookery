import * as React from "react";

/* 
TODO: Continuar y testear
*/

export function useLiveRef<T>(value: T): React.MutableRefObject<T> {
    const ref = React.useRef(value);

    React.useEffect(() => {
        ref.current = value;
    });

    return ref;
}
