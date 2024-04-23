## Server Side Rendering

Cuando hacemos ssr inyectamos el HTML dentro de lo que es el body. Mejoramos la seguridad de la aplicacion porque no se podran inyectar scripts del lado del cliente
y porque ademas, ya no se vera, en la pestaña de networks las llamadas a las api, porque todo eso se hara en el servidor.
El cliente no tiene acceso, el server retorna un html estatico y cuando el navegador lo recibe lo renderiza en la pagina y debe darle interactividad,
entonces react necesita construir el arbol de componentes a traves de la hidratacion: Hacer el HTML interactivo a traves de la construccion de un grafo de componentes-

Y el virtual DOM?
React contruye el virtual dom, hace todos los cambios alli, los agrupa y los lleva al DOM para que ocurra el proceso de pintado-

Y la Re hidratacion?

Es el proceso que ocurre cuando un sitio actua de manera dinamica aquellas partes del grafo de componentes que han cambiado.

En el servidor no tendramos toda la parte de re renderizado, on update, ondestroy, etc

## Datadog (para errores de la aplicacion ej, si aumenta latencia entre servicios)

## Sentry (para errores en tiempo de ejecucion, ej si el js rompio )

## Jenkins

Si los errores escalan hay que meter un PR de revert con el rollback correspondiente.

local ---- staging ---- night ---- produccion

Night es un ambiente especial que se usa para pruebas A/B para checkear como performa alguna feature. Se otorgan accesos al ambiente y a las flags.

## Que estrategia puedo usar si no quiero mostrar una lista muy larga en memoria?

Paginacion , tabs o infinite scroll
Virtualizacion de lista. (Virtual List)

Si tenemos listas grandes tendremos que adoptar alguna de estas estrategias.
