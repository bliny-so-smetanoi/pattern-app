const {Router} = require('express')
const Patterns = require('../models/Patterns')

const router = Router()

// /api/patterns/types/:type
router.get('/types/:type', async (req, res) => {
    try {
        let type = req.params.type

        if (type === '1') {
            type = 'Порождающие паттерны'
        } else if (type === '2') {
            type = 'Паттерны поведения'
        } else {
            type = 'Структурные паттерны'
        }

        const patterns = await Patterns.find({type}, 'name')

        res.status(200).json(patterns)
    } catch (e) {
        res.status(500).json({message: 'Cannot process the request, something went wrong.'})
    }
})

// /api/patterns/:id
router.get('/:id', async (req, res) => {
    try {
        const pattern = await Patterns.findById(req.params.id)

        res.status(200).json(pattern)
    } catch (e) {
        res.status(500).json({message: 'Cannot process the request, something went wrong.'})
    }
})

// /api/patterns/add
router.post('/add',async (req, res) => {
    try {
        await Patterns.insertMany(req.body)

        res.status(200).json({message: 'New patterns added successfully!'})
    } catch (e) {
        res.status(500).json({message: 'Cannot process the request, something went wrong.'})
    }
})

module.exports = router

