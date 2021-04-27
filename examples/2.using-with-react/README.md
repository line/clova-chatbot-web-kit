# 2. Using with React

CLOVA Chatbot Web Kit is an example of implementing a web chat using CLOVA Chatbot provided by LINE.

CLOVA Chatbot Web Kit allows you to add web chats' functions as a React component.
If the website for which you want to use a web chat is made with React, this sample is suitable.

This is a sample of using and executing a web chat React component.

# How to run this sample

### Run a proxy server

Run this script at the root of the `clova-chatbot-web-kit` repository.

```
yarn start
```

### Browse this sample

Open this sample's directory (examples/2.using-with-react/) in a terminal, and run this script.

```
npx serve
```

Browse [http://localhost:5000/](http://localhost:5000/).

# Overview of the code

### index.html

Below is the page that will actually be displayed in the browser. Since this sample uses React, the CDN must be loaded.
In this sample, a proxy server is set up locally. In production, the installed proxy server must be used.

```javascript
    <script crossorigin="anonymous" src="https://unpkg.com/@babel/standalone@7.11.2/babel.min.js"></script>
    <script crossorigin="anonymous" src="https://unpkg.com/react@16.13.1/umd/react.development.js"></script>
    <script crossorigin="anonymous" src="https://unpkg.com/react-dom@16.13.1/umd/react-dom.development.js"></script>
    <script src="http://localhost:8080/webchat.js"></script>
```

Here, properties of `webchat.js` are defined and loaded. You can edit properties for easy customization.
For more information about this method, see [this page](../1.getting-started/README.md).

```javascript
    <script type="text/babel" data-presets="es2015,react,stage-3">
      (async function () {
        const { ReactWebChat } = window.WebChat;
        const root = document.querySelector('#chat')
        const props = {
          root,
          width: '360px',
          height: '600px',
          title: 'Using with React',
          placeholder: "Please enter a question",
          backgroundColor: 'rgb(240,240,240)',
          backgroundImage: '',
          avatarBackgroundColor: '#bbbfc3',
          avatarImage: '',
          bubbleStyle: 'rounded', // [rounded, square]
          bubbleRadius: '12px 6px',
          bubbleColor: 'rgb(80,80,80)',
          bubbleBackgroundColor: 'rgb(255,255,255)',
          bubbleFontSize: '12px',
        }
        window.ReactDOM.render(
          <ReactWebChat {...props} />,
          root
        );
      })().catch(err => console.error(err));
    </script>
```
