import { Cancion } from '../models/Cancion'
import { Router, Request, Response, NextFunction } from 'express'
import mongoose from 'mongoose'

const router = Router()

router.get('/', async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const canciones = await Cancion.find().sort({ createdAt: -1 })
        res.json({ success: true, data: canciones })
    } catch (error) {
        next(error)
    }
})

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const nueva = await Cancion.create(req.body)
        res.status(201).json({ success: true, mensaje: 'Canción creada', data: nueva })
   } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
        return res.status(400).json({ success: false, error: error.message })
    }
    next(error)
}
})

router.put('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const actualizada = await Cancion.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        if (!actualizada) {
            return res.status(404).json({ success: false, error: 'Canción no encontrada' })
        }
        res.json({ success: true, mensaje: 'Canción actualizada', data: actualizada })
   } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
        return res.status(400).json({ success: false, error: error.message })
    }
    next(error)
}
})

router.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const eliminada = await Cancion.findByIdAndDelete(req.params.id)
        if (!eliminada) {
            return res.status(404).json({ success: false, error: 'Canción no encontrada' })
        }
        res.json({ success: true, mensaje: 'Canción eliminada' })
    } catch (error) {
        next(error)
    }
})

export default router