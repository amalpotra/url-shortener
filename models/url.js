import mongoose from 'mongoose'

const UrlSchema = mongoose.Schema({
  shortId: String,
  longUrl: String,
})

export default mongoose.model('Url', UrlSchema)
