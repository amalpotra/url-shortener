import express from 'express'
import { saveUrl, getUrl } from '../controllers/url.controller.js'

const router = express.Router()

router.post('/', saveUrl)

router.get('/:id', getUrl)

router.get('*', (_req, res) => {
  res.status(404).send('You seem to be lost!')
})

export default router
