import { PrismaClient } from '@prisma/client'
import express from 'express'

const router = express.Router()
const prisma = new PrismaClient()


//@route GET api/tags
//@desc All tags
//@access Public
router.get('/', async (req, res) => {
    const tags = await prisma.tag.findMany({
        select: {
            id: true,
            label: true
        }
    })
    return res.json(tags)
})

//@route POST api/tags
//@desc return a tag
//@access Public
router.post('/', async (req, res) => {
    const { label } = req.body
    const tag = await prisma.tag.create({
        data: {
            label
        }
    })
    res.status(201).json(tag)
})

//@route PUT api/tags
//@desc Add a tag to Note
//@access Public
router.put('/:tagId', async (req, res) => {
    const { tagId } = req.params
    const { label } = req.body
    const tag = await prisma.tag.update({
        where: {
            id: tagId
        },
        data: {
            label
        }
    })
    res.status(201).json(tag)
})

//@route DELETE api/tags
//@desc return a tag
//@access Public

router.delete('/:tagId', async (req, res) => {
    const { tagId } = req.params
    try {
        await prisma.tag.delete({
            where: {
                id: tagId
            }
        })
        res.status(204).json({ success: true })
    } catch (error) {
        res.status(404).json({ success: false })
    }
})

export default router