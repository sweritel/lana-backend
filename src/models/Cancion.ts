import { Schema, model, InferSchemaType } from 'mongoose'

const cancionSchema = new Schema(
    {
        titulo: { type: String, required: [true, 'El título es obligatorio'], trim: true },
        album: { type: String, required: [true, 'El álbum es obligatorio'], trim: true },
        duracion: {
            type: String,
            required: [true, 'La duración es obligatoria'],
            match: [/^\d{1,2}:[0-5]\d$/, 'La duración debe tener formato m:ss']
        },
        reproducciones_spotify: {
            type: Number,
            required: [true, 'Las reproducciones son obligatorias'],
            min: [0, 'Las reproducciones no pueden ser negativas']
        },
        url_spotify: { type: String, required: [true, 'La URL de Spotify es obligatoria'], trim: true }
    },
    { timestamps: true }
)

export type CancionDoc = InferSchemaType<typeof cancionSchema>
export const Cancion = model('Cancion', cancionSchema)