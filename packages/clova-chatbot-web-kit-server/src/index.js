require('dotenv').config()
const express = require('express')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const errorHandler = require('./middleware/errorHandler')
const CONFIG = require('./config')

app.use(
  helmet({
    contentSecurityPolicy: false,
  })
)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

let allowlist
if (process.env.ALLOW_URL) {
  allowlist = JSON.parse(process.env.ALLOW_URL)
} else {
  allowlist = CONFIG.ALLOW_URL
}

if (allowlist.length > 0) {
  const corsOptionsDelegate = (req, callback) => {
    let corsOptions
    const isDomainAllowed = allowlist.indexOf(req.header('Origin')) !== -1
    if (isDomainAllowed) {
      corsOptions = { origin: true }
    } else {
      corsOptions = { origin: false }
    }
    callback(null, corsOptions)
  }
  app.use(cors(corsOptionsDelegate))
  console.log(`allow url : ${allowlist}`)
} else {
  app.use(cors())
  console.log('allow url : all')
}

app.use(express.static('static'))
app.use(errorHandler())
app.use('/api/v2', require('./api/v2/index'))

app.listen(process.env.PORT || 8080, () => {
  console.log(
    `[${process.env.NODE_ENV}] listening at ${process.env.PORT || 8080}`
  )
})
