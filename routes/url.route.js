import express from 'express'
import rateLimit from 'express-rate-limit'
import { getUrl, saveUrl } from '../controllers/url.controller.js'

const urlRouter = express.Router()

// Rate limit requests to 1 per second
const limiter = rateLimit({
  windowMs: 1000,
  max: 1,
  standardHeaders: true,
  legacyHeaders: false,
})

/**
 * @openapi
 * /:
 *   post:
 *     summary: Create a short code
 *     description: Convert a long url into a short code, which
 *                  the can be used to redirect to the original URL.
 *     requestBody:
 *       description: Long URL to get short code for.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               longUrl:
 *                 type: string
 *             example:
 *               longUrl: https://amalpotra.github.io
 *     responses:
 *       '201':
 *         description: Short code has been generated.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 shortId:
 *                   type: string
 *               example:
 *                 shortId: 5Kqlby7nZG
 *       '200':
 *         description: Existing short code has been found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 shortId:
 *                   type: string
 *               example:
 *                 shortId: 5Kqlby7nZG
 *       '406':
 *         description: Invalid long URL is provided.
 *       '500':
 *         description: Internal server error occurred.
 */
urlRouter.post('/', limiter, saveUrl)

/**
 * @openapi
 * /{shortId}:
 *   get:
 *     summary: Redirect to long url
 *     description: Redirect to corresponding long url through
 *                  specified short code.
 *     parameters:
 *     - in: path
 *       name: shortId
 *       schema:
 *         type: string
 *         minLength: 10
 *         maxLength: 10
 *       required: true
 *       description: Short code corresponding to long URL.
 *     responses:
 *       '302':
 *         description: Redirection was successful.
 *       '406':
 *         description: URL code is invalid.
 *       '500':
 *         description: Internal server error occurred.
 */
urlRouter.get('/:id', limiter, getUrl)

export default urlRouter
