# Ejemplo de Fetch API en React

Este proyecto demuestra cómo usar `fetch` para consumir una API REST en React utilizando hooks (`useState` y `useEffect`).

## Características

- ✅ Fetch de API con `useEffect`
- ✅ Manejo de estados de carga
- ✅ Manejo de errores
- ✅ Renderizado condicional
- ✅ Grid responsive con CSS

## API Utilizada

[JSONPlaceholder](https://jsonplaceholder.typicode.com/) - API REST gratuita para pruebas.

Endpoint: `https://jsonplaceholder.typicode.com/users`

## Instalación

```bash
npm install
```

## Ejecutar

```bash
npm run dev
```

## Conceptos clave

### useEffect para fetch

```javascript
useEffect(() => {
  fetch(url)
    .then(response => response.json())
    .then(data => setData(data))
    .catch(error => setError(error))
}, []) // Array vacío: se ejecuta solo al montar
```

### Estados de la aplicación

- **Loading**: mientras se realiza el fetch
- **Error**: si hay un problema con la petición
- **Success**: cuando los datos se cargan correctamente
