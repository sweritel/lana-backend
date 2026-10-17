import express from 'express'
import cors from 'cors'
import { config } from './config/env'
import { conectarMongo } from './config/mongo'
import cancionesRouter from './routes/canciones'
import { errorHandler } from './middleware/errorHandler'

export const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (_req, res) => {
    res.send('API REST de Lana Del Rey activa')
})

app.use('/canciones', cancionesRouter)

app.use((req, res) => {
    res.status(404).json({ success: false, error: 'Ruta no encontrada' })
})

app.use(errorHandler)

conectarMongo().then(() => {
    app.listen(config.port, () => {
        console.log(`🚀 Servidor en http://localhost:${config.port}`)
    })
})