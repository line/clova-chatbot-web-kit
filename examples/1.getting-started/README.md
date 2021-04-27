# 1. Getting started

CLOVA Chatbot Web Kit is an example of implementing a chatbot using CLOVA Chatbot provided by LINE. By using this, it is possible to implement the web chat feature on the website in a few steps.

You can easily customize CLOVA Chatbot Web Kit's styles by defining some properties using JavaScript.
In this sample, the properties can be changed interactively by user input.

Before using this sample, please follow the steps mentioned below to build `webchat.js` and set the test environment in the root directory.

# How to run this sample

### Run a proxy server

Run this script at the root of the `clova-chatbot-web-kit` repository.

```
yarn start
```

### Browse this sample

Open this sample's directory (examples/1.getting-started/) in a terminal, and run this script.

```
npx serve
```

Browse [http://localhost:5000/](http://localhost:5000/).

# Properties of webchat.js

Properties of `webchat.js` are defined in [main.js](main.js). In this sample, the properties can be changed interactively by user input.

All properties are shown in the table below.

| Property                  | Description                                                             |
| ------------------------- | ----------------------------------------------------------------------- |
| apiPath                   | Proxy server path                                                       |
| width                     | Chat box width                                                          |
| height                    | Chat box height                                                         |
| title                     | Chat box title.                                                         |
| placeholder               | Placeholder text to display in the text box.                            |
| backgroundColor           | Chat box background color                                               |
| backgroundImage           | Chat box background image                                               |
| avatarBackgroundColor     | Avatar background color                                                 |
| avatarBackgroundImage     | Avatar background image                                                 |
| bubbleStyle               | Default bubble edge style ( `rounded` or `square`)                      |
| bubbleRadius              | Default bubble edge rounding when `bubbleStyle` is `rounded`            |
| bubbleColor               | Default bubble font color                                               |
| bubbleBackgroundColor     | Default bubble background color                                         |
| bubbleFontSize            | Default bubble font size                                                |
| userBubbleStyle           | Overwrite user bubble edge style ( `rounded` or `square`)               |
| userBubbleRadius          | Overwrite user bubble edge rounding when `userBubbleStyle` is `rounded` |
| userBubbleColor           | Overwrite user bubble font color                                        |
| userBubbleBackgroundColor | Overwrite user bubble background color                                  |
| userBubbleFontSize        | Overwrite user bubble font size                                         |

# Events

`webchat.js` is designed to support events.
The sample defines the Action Types available in [main.js](main.js).
The table below shows the Action Types that are currently being supported.

| Action Type     | Chat box event                                  |
| --------------- | ----------------------------------------------- |
| CHAT_START      | Open a chat box, and display a welcome message. |
| CHAT_FINISH     | Close the chat box.                             |
| CHAT_MINIMIZE   | Minimize the chat box.                          |
| CHAT_UNMINIMIZE | Change the chat box size to default.            |
| CHAT_SEND       | Send a text message to CLOVA Chatbot.           |
