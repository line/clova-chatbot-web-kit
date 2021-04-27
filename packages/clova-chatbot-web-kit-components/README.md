# clova-chatbot-web-kit-components

The components define the styles for each element displayed in a web chat. By editing these components directly, you can customize more styles than property-based changes.

## Usage

```
import {
  WebChatHeader,
  WebChatBody,
  WebChatSendBox,
  StyleContext,
} from '@line/clova-chatbot-web-kit-components'
```

## Components

Each component defines the styles displayed in the web chat window. Styles are defined for each component of the [CLOVA Chatbot Custom API](https://apidocs.ncloud.com/ja/ai-application-service/chatbot/).

The components and their corresponding CLOVA Chatbot components are described as follows.

| Components     | CLOVA Chatbot Custom API Example                                                                                     | Description                                                 |
| -------------- | -------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| Avatar         |                                                                                                                      | Chatbot avatar style                                        |
| Button         | [Template response](https://apidocs.ncloud.com/en/ai-application-service/chatbot/chatbot_example/#template-response) |                                                             |
| Carousel       | [Carousel](https://apidocs.ncloud.com/en/ai-application-service/chatbot/chatbot_example/#carousel)                   |                                                             |
| ChatbotBubble  |                                                                                                                      | Chatbot bubble style                                        |
| Flex           | [LINE Flex](https://apidocs.ncloud.com/en/ai-application-service/chatbot/chatbot_example/#line-flex)                 | TBD                                                         |
| Image          | [Image response](https://apidocs.ncloud.com/en/ai-application-service/chatbot/chatbot_example/#image-response)       |                                                             |
| Loading        |                                                                                                                      | Display style when waiting for a response from proxy server |
| PersistentMenu | [Persistent Menu](https://apidocs.ncloud.com/en/ai-application-service/chatbot/chatbot_example/#persistent-menu)     | TBD                                                         |
| QuickButton    | [Quick Buttons](https://apidocs.ncloud.com/en/ai-application-service/chatbot/chatbot_example/#quick-buttons)         |                                                             |
| Template       | [Template response](https://apidocs.ncloud.com/en/ai-application-service/chatbot/chatbot_example/#template-response) |                                                             |
| Text           | [Text response](https://apidocs.ncloud.com/en/ai-application-service/chatbot/chatbot_example/#text-response)         |                                                             |
| Timestamp      |                                                                                                                      | Timestamp style displayed for each bubble                   |
| UserBubble     |                                                                                                                      | User bubble style                                           |
| WebChatBody    |                                                                                                                      | Web chat body style                                         |
| WebChatHeader  |                                                                                                                      | Web chat header style                                       |
| WebChatSendBox |                                                                                                                      | Web chat textbox style                                      |
