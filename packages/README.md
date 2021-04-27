# Packages

CLOVA Chatbot Web Kit consists of the following packages:


- [clova-chatbot-web-kit-core](#clova-chatbot-web-kit-core)
- [clova-chatbot-web-kit-components](#clova-chatbot-web-kit-components)
- [clova-chatbot-web-kit-bundle](#clova-chatbot-web-kit-bundle)
- [clova-chatbot-web-kit-server](#clova-chatbot-web-kit-server)
- [isomorphic-*](#isomorphic-*)

## `clova-chatbot-web-kit-core`

Stateful data layer as a Redux store.

## `clova-chatbot-web-kit-components`

User interface layer exposed as React components.

## `clova-chatbot-web-kit-bundle`

This package serves two purposes.

1. Entry point of our main package
1. Monolithic `.js` files

## `clova-chatbot-web-kit-server`

This package serves an API proxy server for a web chat during development and production. To test local changes to the web chat, run a build script.

## `isomorphic-*`

Web Chat bundle its own version of React in `webchat*.js`. If the hosting page already loaded React as a global variable through `window.React` and `window.ReactDOM`, Web Chat prioritizes that instance over its own bundled version.

These packages are part of the [Microsoft / BotFramework-WebChat](https://github.com/microsoft/BotFramework-WebChat) project. To find out more about the license for this package, see [License](https://github.com/microsoft/BotFramework-WebChat/blob/master/LICENSE).

