import express from 'express'
import dotenv from 'dotenv'
import connectDB from './configs/db.config.js'
import router from './routes/url.route.js'

dotenv.config({ path: './configs/config.env' })

const app = express()

connectDB()

const PORT = process.env.PORT || 5000

app.use(express.json())
app.use('', router)

app.listen(PORT, () =>
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on PORT ${PORT}...`
  )
)
