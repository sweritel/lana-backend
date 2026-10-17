import mongoose from 'mongoose'
import { config } from './env'

export const conectarMongo = async (): Promise<void> => {
    try {
        await mongoose.connect(config.mongoUri)
        console.log('✅ Conectado a MongoDB')
    } catch (error) {
        const mensaje = error instanceof Error ? error.message : 'Error desconocido'
        console.error('❌ Error al conectar con MongoDB:', mensaje)
        process.exit(1)
    }
}