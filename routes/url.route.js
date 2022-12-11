import express from 'express'
import rateLimit from 'express-rate-limit'
import { saveUrl, getUrl } from '../controllers/url.controller.js'

const router = express.Router()

// Rate limit requests to 1 per second
const limiter = rateLimit({
  windowMs: 1000,
  max: 1,
  standardHeaders: true,
  legacyHeaders: false,
})

router.post('/', limiter, saveUrl)
router.get('/:id', limiter, getUrl)

export default router
