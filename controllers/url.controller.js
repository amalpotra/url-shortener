import { nanoid } from 'nanoid'
import validUrl from 'valid-url'
import UrlModel from '../models/url.model.js'

export const saveUrl = async (req, res) => {
  try {
    const { longUrl } = req.body
    if (!validUrl.isUri(longUrl)) {
      return res.status(406).send('Invalid URL!')
    }

    const urlFromDb = await UrlModel.findOne({ longUrl: { $eq: longUrl } })
    if (urlFromDb) {
      return res.send({ shortId: urlFromDb.shortId })
    } else {
      const shortId = nanoid(10)
      await new UrlModel({ shortId: shortId, longUrl: longUrl }).save()

      return res.send({ shortId: shortId })
    }
  } catch (error) {
    return res.status(500).send('Internal server error!')
  }
}

export const getUrl = async (req, res) => {
  try {
    const shortId = req.params.id
    if (shortId.length != 10) {
      return res.status(406).send('Invalid url code!')
    }

    const urlFromDb = await UrlModel.findOne({ shortId: shortId })
    if (urlFromDb) {
      res.redirect(301, urlFromDb.longUrl)
    } else {
      return res.status(404).send('Url code not found!')
    }
  } catch (error) {
    return res.status(500).send('Internal server error!')
  }
}