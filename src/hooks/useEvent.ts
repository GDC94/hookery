/* eslint-disable */
import * as React from "react";

type AnyFunction = (...args: unknown[]) => unknown;

export function useEvent<T extends AnyFunction>(callback: T): T {
    const ref = React.useRef<AnyFunction>(() => {});
    //inicialmente, se inicia la ref como una funcion vacia
    React.useLayoutEffect(() => {
        ref.current = callback;
        // guardamos el valor del callback
    }, []);

    //retornamos una funcion memorizada. Retornara un callback general que adentro tendra los args
    return React.useCallback((...args: unknown[]) => ref.current(...args), []) as T;
}

/*

----> Patrón Singleton

El patrón Singleton es un diseño de software que garantiza que una clase tenga una única instancia y proporciona un punto de acceso global a esa instancia. Esto puede ser útil 
cuando solo se necesita una única instancia de una clase en toda la aplicación, como en el caso de un gestor de estado global o un servicio que 
necesita mantener un estado único en toda la aplicación.

---> Diferencia entre useEffect y useLayoutEffect

useEffect y useLayoutEffect son hooks de React utilizados para realizar efectos secundarios en componentes funcionales. La principal 
diferencia entre ellos radica en su sincronización con el proceso de renderizado.

useEffect es asincrónico y se ejecuta después de que la renderización se haya completado y el navegador 
haya actualizado el DOM. Esto significa que es seguro realizar operaciones que no bloqueen la interfaz de 
usuario dentro de useEffect, como realizar llamadas a la API o actualizar el estado.

Por otro lado, useLayoutEffect es síncrono y se ejecuta inmediatamente después de que el navegador haya 
renderizado el DOM, pero antes de que el navegador pinte la pantalla. Esto puede ser útil cuando se necesita realizar 
operaciones de mutación en el DOM de manera síncrona antes de que el navegador pinte la pantalla.

----> Server-Side Rendering (SSR)

El SSR consiste en generar el HTML de una aplicación en el servidor y enviarlo al cliente. Esto se realiza antes 
de que la página se cargue en el navegador, lo que mejora el SEO y la seguridad de la aplicación.

Al renderizar en el servidor, se envía un HTML estático que se mostrará inicialmente en la página. Luego, 
cuando el navegador lo recibe, React lo convierte en un árbol de componentes a través del proceso de hidratación. Durante la
hidratación, React construye el árbol virtual (Virtual DOM), realiza los cambios necesarios y luego actualiza el DOM.
La rehidratación ocurre cuando React detecta cambios en el árbol y realiza un nuevo renderizado solo en las partes que han cambiado,
en lugar de actualizar toda la página. Esto mejora la eficiencia y la velocidad de la aplicación, ya que no es necesario volver a cargar la página completa en
cada interacción. Además, el SSR proporciona una capa adicional de seguridad al prevenir la inyección de scripts y ocultar las llamadas a API en la red, lo que ayuda a
proteger la aplicación contra ataques maliciosos.
*/
