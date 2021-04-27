const express = require('express')
const crypto = require('crypto')
const axios = require('axios')
const router = express.Router()

const CONFIG = require('../../config')
const asyncMiddleware = require('../../middleware/asyncMiddleware')

const unixTimestamp = () => {
  return Math.floor(new Date().getTime())
}

const HmacSHA256 = (data, key) => {
  const hmac = crypto.createHmac('SHA256', key)
  hmac.update(data)
  return hmac.digest()
}

if (process.env.NODE_ENV === 'development') {
  router.use((req, res, next) => {
    const { originalUrl, query, params, body } = req
    console.log(`--------------------`)
    console.log(`${new Date().toISOString()}`)
    console.log(`${originalUrl}`)
    console.log(`query:`, query)
    console.log(`params:`, params)
    console.log(`body:`, body)
    next()
  })
}

/**
 * conversation
 */
router.post(
  '/message',
  asyncMiddleware(async (req, res) => {
    const {
      body: { userId, text, event },
    } = req

    /**
     * chatbot engineへrequest
     */
    const params = {
      version: 'v2',
      userId,
      timestamp: unixTimestamp(),
      bubbles: [{ type: 'text', data: { description: text } }],
      event,
    }

    const result = await axios.post(CONFIG.INVOKE_URL, params, {
      headers: {
        'Content-Type': 'application/json',
        'X-NCP-CHATBOT_SIGNATURE': HmacSHA256(
          JSON.stringify(params),
          CONFIG.SECRET_KEY
        ).toString('base64'),
      },
    })

    res.send(result.data)
  })
)

module.exports = router
