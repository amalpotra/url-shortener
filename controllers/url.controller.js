import { nanoid } from 'nanoid'
import validUrl from 'valid-url'
import UrlModel from '../models/url.model.js'

export const saveUrl = async (req, res) => {
  try {
    const { longUrl } = req.body
    if (!validUrl.isWebUri(longUrl)) {
      return res.status(406).send('Invalid URL!')
    }

    const urlFromDb = await UrlModel.findOne({ longUrl: { $eq: longUrl } })
    if (urlFromDb) {
      return res.status(200).send({ shortId: urlFromDb.shortId })
    } else {
      const shortId = nanoid(10)
      await new UrlModel({ shortId: shortId, longUrl: longUrl }).save()

      return res.status(201).send({ shortId: shortId })
    }
  } catch (error) {
    return res.status(500).send('Internal server error!')
  }
}

export const getUrl = async (req, res) => {
  try {
    const shortId = req.params.id
    if (shortId.length !== 10) {
      return res.status(406).send('Invalid url code!')
    }

    const urlFromDb = await UrlModel.findOne({ shortId: shortId })
    if (urlFromDb) {
      res.redirect(urlFromDb.longUrl)
    } else {
      return res.status(404).send('Url code not found!')
    }
  } catch (error) {
    return res.status(500).send('Internal server error!')
  }
}
