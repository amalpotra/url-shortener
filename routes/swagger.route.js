import express from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerSpecs from '../configs/swagger.config.js'

const swaggerRouter = express.Router()

swaggerRouter.use('/api-docs', swaggerUi.serve)
swaggerRouter.get('/api-docs', swaggerUi.setup(swaggerSpecs))

export default swaggerRouter
