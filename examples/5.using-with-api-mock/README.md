# 1. Using with api mock

Using the mock server, you can test the webchat component locally without having to connect to CLOVA Chatbot.

# How to run this sample

### Run a mock server

Run this script at the root of the `clova-chatbot-web-kit` repository.

```
yarn start-mock
```

### Browse this sample

Open this sample's directory (examples/5.using-with-api-mock/) in a terminal, and run this script.

```
npx serve
```

Browse [http://localhost:3000/](http://localhost:3000/).

# Examples of API mock response

Examples of API are defined in [openapispec.yml](openapispec.yml). This mock server creates a fake "mock" based on the OpenAPI documentation, allowing you to see how it works before building your proxy server.

Note: This is not an exhaustive list of CLOVA Chatbot response formats.

| Response type    | Description                   |
| ---------------- | ----------------------------- |
| Text response    | only normal text              |
|                  | text + url                    |
| Image response   | only normal image             |
| Template respose | text + buttons                |
|                  | image + buttons               |
| Carousel         | template with image + buttons |
| Quick Butons     | normal buttons                |
