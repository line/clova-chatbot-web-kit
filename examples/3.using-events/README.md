# 3. Using events

In this sample, we introduce the events of `webchat.js`. Available events are chatbot window control and post message.

This is a sample Q & A site using a web chat. When the user clicks the question link, the content of the question is automatically posted to a web chat and the answer is automatically obtained via the bot.

# How to run this sample

### Run a proxy server

Run this script at the root of the `clova-chatbot-web-kit` repository.

```
yarn start
```

### Browse this sample

Open this sample's directory (examples/3.using-events/) in a terminal, and run this script.

```
npx serve
```

Browse [http://localhost:5000/](http://localhost:5000/).

# Overview of the code

Let's take a look at the code that defines the Action of a post message as an example.

[See here](../1.getting-started/README.md#events) for the list of available Actions.

### [clova-chatbot-web-kit-bundle:usePostMessage.js](../../packages/clova-chatbot-web-kit-bundle/src/hooks/usePostMessage.js)

Below is where the Action is defined. To add a new Action, add it in this code.

Below is the definition of the Action for sending a text message.

```javascript
const handleSend = (value) => {
  onSendMessage({
    userId,
    text: value,
    event: "send",
  });
};
```

Add the definition of the Action when the web site is ready to post the message.

Add code:

```javascript
/**
 * Action when post message
 */
const sendChatAction = () => {
  return {
    type: CHAT_SEND,
    payload: {},
  };
};
```

### [main.js](main.js)

Since the Action needs to be posted as payload, the value is set to payload.

```javascript
var CHAT_SEND = "CHAT_SEND";

const sendChatAction = (value) => {
  return {
    type: CHAT_SEND,
    payload: value,
  };
};
```

A text message is sent to the web chat each time a link to a question is clicked.

```javascript
window.postMessage(sendChatAction($(chatQ0).text()), "*");
```
