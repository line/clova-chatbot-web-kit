# CLOVA Chatbot Web Kit

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

CLOVA Chatbot has a powerful conversation model engine, so you can develop chatbots that satisfy various customer needs. This repository is an example of implementing a web-based client using CLOVA Chatbot.

- By using this, you can easily deploy a web chat to your website.
- It's customizable and can be used as is in a production environment with few modifications.

For more information on [CLOVA Chatbot](https://clova.line.me/clova-chatbot/), see:

- [CLOVA Chatbot](https://clova.line.me/clova-chatbot/)
- [CLOVA Chatbot API Reference](https://apidocs.ncloud.com/ja/ai-application-service/chatbot/)

CLOVA Chatbot Web Kit Demo page is [here](https://clovachatbot-webkit.line-scdn.net/samplepage/using-events/index.html) and, for more examples see [here](https://github.com/line/clova-chatbot-web-kit/blob/master/examples/README.md)

# How to use CLOVA Chatbot Web Kit

First, create a bot using `CLOVA Chatbot`. Once the bot is created, you will need to obtain the bot's web chat `Secret Key` and `Invoke URL` in [CLOVA Chatbot Setting](https://docs.ncloud.com/en/chatbot/chatbot-2-5.html).

You will find the following information in [Messenger Connection] > [Custom].

- API Gateway Invoke URL
- Secret Key

Then set the `Secret Key` and `Invoke URL` in the config file of the API Proxy Server.

The `ALLOW_URL` list is also set here for CORS to prevent unauthorized use. You can set more than one in the list.

```
# packages/clova-chatbot-web-kit-server/src/config.js

const env = {
  development: {
    SECRET_KEY: '',
    INVOKE_URL: '',
    ALLOW_URL: [''],
  },
  production: {
    SECRET_KEY: '',
    INVOKE_URL: '',
    ALLOW_URL: [''],
  },
}
```

### Integrating with CDN

If you don't want to build and host `webchat.js` yourself, you can include it from a CDN (Content Delivery Network).

The URI of `webchat.js` is defined as `https://clovachatbot-webkit.line-scdn.net/webchat/webchat-{version}.js`. See Tag for `{version}`.

```html
<head>
  <script src="https://clovachatbot-webkit.line-scdn.net/webchat/webchat-1.0.1.js"></script>
</head>
```

This is the typical and easy-to-use method. You can easily customize web chats by specifying some modifiable parameters.

Here is how you can add web chat control to your website.

```javascript
WebChat.renderWebChat(
  {
    apiPath: "http://localhost:8080/",
    width: "360px",
    height: "550px",
    title: "CLOVA Chatbot!",
    placeholder: "What's up?",
    backgroundColor: "rgb(154,154,162)",
    backgroundImage: "",
    avatarBackgroundColor: "#bbbfc3",
    avatarImage: "",
    bubbleStyle: "rounded", // [rounded, square]
    bubbleRadius: "12px",
    bubbleColor: "rgb(80,80,80)",
    bubbleBackgroundColor: "rgb(243,243,237)",
    bubbleFontSize: "12px",
  },
  document.querySelector(chatContainer)
);
```

Find more details in [examples/1.getting-started](examples/1.getting-started).

### Integrating with React

If you want to customize the web chat, you can also do so with React.

When you make changes inside the package, you will need to rebuild `webchat.js` again.

```javascript
const { ReactWebChat } = window.WebChat;
const root = document.querySelector("#chat");
const props = {
  root,
  apiPath: "http://localhost:8080/",
  width: "360px",
  height: "600px",
  title: "Using with React",
  placeholder: "Please enter a question",
  backgroundColor: "rgb(240,240,240)",
  backgroundImage: "",
  avatarBackgroundColor: "#bbbfc3",
  avatarImage: "",
  bubbleStyle: "rounded", // [rounded, square]
  bubbleRadius: "12px 6px",
  bubbleColor: "rgb(80,80,80)",
  bubbleBackgroundColor: "rgb(255,255,255)",
  bubbleFontSize: "12px",
};
window.ReactDOM.render(<ReactWebChat {...props} />, root);
```

Find more details in [examples/2.using-with-react](examples/2.using-with-react).

### Installation

To install all dependencies at once, run this script at the root of the repository.

```
yarn install

yarn bootstrap
```

### Building the packages

Build all packages (core, components, bundle) at once:

```
# production
yarn build

or

# development
yarn build-dev
```

### Running the packages

Start a proxy server locally:

```
# production
yarn start

or

# development http://localhost:8080
yarn start-dev
```

# Examples

[View the complete list of web chat samples](./examples/README.md) for more ideas on customizing a web chat.

# Deployment

Deploy and run the proxy server on Heroku:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

Deploy and run the proxy server on Heroku manually:

```
# create heroku app
heroku apps:create {app-name}

# add remote for heroku
git remote add proxy-server https://git.heroku.com/{app-name}.git

# set secret and invoke url to heroku
heroku config:set --remote proxy-server CLOVA_SECRET_KEY={secret key}
heroku config:set --remote proxy-server CLOVA_INVOKE_URL={invoke url}

# set allow url
heroku config:set --remote proxy-server ALLOW_URL='["{allow-url1.com}", "{allow-url2.com}"]'

# heroku install development package
heroku config:set --remote proxy-server  NPM_CONFIG_PRODUCTION=false

# push proxy server
git subtree push --prefix packages/clova-chatbot-web-kit-server proxy-server master

# show logs
heroku logs --remote proxy-server --tail

# restart heroku (if you need)
heroku restart --remote proxy-server

```

# Built With

- [Lerna](https://lerna.js.org/) - A tool for managing JavaScript projects with multiple packages
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Redux](https://redux.js.org/) - A predictable state container for JS apps
- [styled-components](https://styled-components.com/) - Visual primitives for the component age

# How to contribute

First of all, thank you so much for taking your time to contribute! clova-chatbot-web-kit is not very different from any other open source projects you are aware of. It will be amazing if you could help us by doing any of the following:

- File an issue in [the issue tracker](https://github.com/line/clova-chatbot-web-kit/issues) to report bugs and propose new features and
  improvements.
- Ask a question using [the issue tracker](https://github.com/line/clova-chatbot-web-kit/issues).
- Contribute your work by sending [a pull request](https://github.com/line/clova-chatbot-web-kit/pulls).

# License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

# Acknowledgments

[packages/isomorphic-react](packages/isomorphic-react) and [packages/isomorphic-react-dom](packages/isomorphic-react-dom) are part of the [Microsoft / BotFramework-WebChat](https://github.com/microsoft/BotFramework-WebChat) project. To find out more about the license for this package, see [License](https://github.com/microsoft/BotFramework-WebChat/blob/master/LICENSE).
