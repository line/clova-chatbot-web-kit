const serverless = require("serverless-http");
const express = require("express");
const crypto = require("crypto");
const axios = require("axios");
const cors = require("cors");

const app = express();

const CLOVA_SECRET_KEY = process.env.CLOVA_SECRET_KEY;
const CLOVA_INVOKE_URL = process.env.CLOVA_INVOKE_URL;
const CLOVA_ALLOW_URL = process.env.CLOVA_ALLOW_URL;

const asyncMiddleware = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

const errorHandler = (err, req, res, next) => {
  console.log("error", err);

  res.status(err?.status || 500);
  res.send({ message: err?.message || 'Something went wrong.' });
};

/* Ensure that CLOVA_ALLOW_URL is an array */
const getAllowList = () => {
  try {
    const urls = JSON.parse(CLOVA_ALLOW_URL);
    return Array.isArray(urls) ? urls : [];
  } catch (e) {
    console.log(e.message);
    return [];
  }
};

/**
 * Configuring CORS w/ Dynamic Origin
 * @param req
 * @param callback
 */
const corsOptionsDelegate = (req, callback) => {
  const corsOptions = { origin: false };
  const allowList = getAllowList();
  if (allowList.indexOf(req.header("Origin")) !== -1) {
    corsOptions.origin = true;
  } else {
    corsOptions.origin = false;
  }
  callback(null, corsOptions);
};

const unixTimestamp = () => {
  return Math.floor(new Date().getTime());
};

const HmacSHA256 = (data, key) => {
  const hmac = crypto.createHmac("SHA256", key);
  hmac.update(data);
  return hmac.digest();
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (getAllowList().length > 0) {
  app.use(cors(corsOptionsDelegate));
} else {
  app.use(cors());
}

app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "CLOVA Chatbot!",
  });
});

app.post(
  "/api/v2/message",
  asyncMiddleware(async (req, res) => {
    const {
      body: { userId, text, event },
    } = req;

    /**
     * Request to CLOVA chatbot engine
     */
    const params = {
      version: "v2",
      userId,
      timestamp: unixTimestamp(),
      bubbles: [{ type: "text", data: { description: text } }],
      event,
    };

    const result = await axios.post(CLOVA_INVOKE_URL, params, {
      headers: {
        "Content-Type": "application/json",
        "X-NCP-CHATBOT_SIGNATURE": HmacSHA256(
          JSON.stringify(params),
          CLOVA_SECRET_KEY
        ).toString("base64"),
      },
    });

    console.log(result.data);
    res.send(result.data);
  })
);

app.use(errorHandler);

module.exports.handler = serverless(app);
