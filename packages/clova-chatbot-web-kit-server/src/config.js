const env = {
  development: {
    SECRET_KEY: '',
    INVOKE_URL: '',
    ALLOW_URL: [],
  },
  production: {
    SECRET_KEY: '',
    INVOKE_URL: '',
    ALLOW_URL: [],
  },
}

if (process.env.CLOVA_SECRET_KEY && process.env.CLOVA_INVOKE_URL) {
  const venv = {
    SECRET_KEY: process.env.CLOVA_SECRET_KEY,
    INVOKE_URL: process.env.CLOVA_INVOKE_URL,
    ALLOW_URL: process.env.ALLOW_URL,
  }
  module.exports = venv
  console.log('credential : using environment variable')
  console.log(venv.SECRET_KEY)
  console.log(venv.INVOKE_URL)
} else {
  module.exports = process.env.NODE_ENV
    ? env[process.env.NODE_ENV]
    : env.development
  console.log('credential : using static')
}
