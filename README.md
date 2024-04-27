# React + TypeScript + Vite

## Get started

```
  yarn add -D @types/node vite-plugin-dts // exponer los tipos
```

Eslint

```
 yarn add -D eslint-plugin-react-hooks eslint-plugin-simple-import-sort
```

### Testing

yarn add -D
vitest
@testing-library/react-hooks
@testing-library/jest-dom jsdom
@testing-library/react

### Versioning

npm version patch -> incrementa el patch del package.json
npm version prepatch -> pasa de la versión 1.0.0 a 1.0.0-1 (util cuando tenemos entornos pre-productivos)

npm version minor
npm version preminor

npm version major
npm version premajor

Datadog (latencia entre los servicios)
Datadog (errores de aplicacion) + Sentry (errores en tiempo de ejecución)
