# Lana Del Rey - Backend

API REST con Node.js, Express, TypeScript y MongoDB (Mongoose).

## Instalación

```bash
npm install
```

## Configuración

Crea un archivo `.env` en la raíz de esta carpeta:

```env
PORT=3001
MONGO_URI=mongodb://localhost:27017/lana_db
```

Para usar MongoDB Atlas, reemplaza `MONGO_URI` por tu cadena de conexión.

## Ejecución

```bash
npx tsx src/app.ts
```

Debe mostrar `Conectado a MongoDB` y `Servidor en http://localhost:3001`.

## Endpoints

| Método | Ruta           | Descripción               |
|--------|----------------|---------------------------|
| GET    | /canciones     | Lista todas las canciones |
| POST   | /canciones     | Crea una canción          |
| PUT    | /canciones/:id | Actualiza una canción     |
| DELETE | /canciones/:id | Elimina una canción       |

## Despliegue

Desplegado en Render: https://lana-backend-9lh8.onrender.com/canciones
