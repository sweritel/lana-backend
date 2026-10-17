import dotenv from 'dotenv'
dotenv.config()

export const config = {
    port: process.env.PORT ? parseInt(process.env.PORT, 10) : 3001,
    mongoUri: process.env.MONGO_URI || 'mongodb://localhost:27017/lana_db'
}
