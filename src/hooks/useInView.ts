import * as React from "react";

/**
 * @method useIsInView A custom React hook that.
 * @param Ref The callback function to memoize.
 * @abstract: This hook is going to be executed every time that the reference that arrives to it by
 * ?parameter changes. That reference is the one that the observer is listening to.
 * ?And I will have two stages, one of subscription to the event and one of unsubscription. When the ref is
 * ?different from null, it stops observing.
 * @returns {Boolean}
 */

/* 
TODO: Ver intersection obrsever class de The joy of react
*/

export function useIsInView(ref: React.RefObject<Element | null>): boolean {
    const [isIntersecting, setIntersecting] = React.useState<boolean>(false);

    React.useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const [entry] = entries;

            setIntersecting(entry.isIntersecting);
        });

        const currentRef = ref.current;

        if (currentRef !== null) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef !== null) {
                observer.unobserve(currentRef);
            }
        };
    }, [ref]);

    return isIntersecting;
}

/*
* Threshold es un concepto fundamental en diversas áreas, que se refiere a un límite o punto crítico que se utiliza para tomar decisiones, 
* generar alertas o realizar acciones específicas en función de ciertos criterios predefinidos.

* Este hook me podria ayudar a determinar el % o numero que determinara si se debe disparar la visibilidad de un elemento o no.

* **** Ejemplo, banners publicitarios en una app.
* ******** Si yo solo scrolleo, quiza no veo nada de lo que va pasando, entonces yo puedo determinar que una impresion del usuario recien se producira cuando 
* ******** el user haya visto por mas de 0.5 segundos. Esa es la diferencia entre ver e imprimir.
*/
