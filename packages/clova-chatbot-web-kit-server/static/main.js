$(function () {
  var chatContainer = '#chat'
  var chatButton = '#chat-button'
  var openButton = '.btn-open'

  /**
   * state
   */
  var state = { isOpen: false, isMinimized: false }

  /**
   * Messaging Action Types
   */
  var CHAT_START = 'CHAT_START'
  var CHAT_FINISH = 'CHAT_FINISH'
  var CHAT_MINIMIZE = 'CHAT_MINIMIZE'
  var CHAT_UNMINIMIZE = 'CHAT_UNMINIMIZE'
  var CHAT_SEND = 'CHAT_SEND'

  var startChatAction = function () {
    return {
      type: CHAT_START,
      payload: {},
    }
  }

  var finishChatAction = function () {
    return {
      type: CHAT_FINISH,
      payload: {},
    }
  }

  var minimizeChatAction = function () {
    return {
      type: CHAT_MINIMIZE,
      payload: {},
    }
  }

  var unminimizeChatAction = function () {
    return {
      type: CHAT_UNMINIMIZE,
      payload: {},
    }
  }

  var sendChatAction = function (value) {
    return {
      type: CHAT_SEND,
      payload: value,
    }
  }

  var handleMinimize = function () {
    // Do something when minimizing a WebChat
    state.isMinimized = true
  }

  var handleUnminimize = function () {
    // Do something when minimizing a WebChat
    state.isMinimized = false
  }

  var handleStart = function () {
    // Do something when starting a WebChat
    $(chatButton).css({ display: 'none' })
    $(chatContainer).css({ display: 'block' })

    state.isOpen = true
    $(openButton).text('Close Web Chat')
  }

  var handleFinish = function () {
    // Do something when finishing a WebChat
    $(chatButton).css({ display: 'flex' })

    state.isOpen = false
    $(openButton).text('Open Web Chat')
  }

  var handleSend = function () {
    // Do something when sending a text
  }

  var handleMessage = function (e) {
    var data = e.data
    if (data && data.type) {
      switch (data.type) {
        case 'CHAT_START': {
          handleStart()
          break
        }
        case 'CHAT_FINISH': {
          handleFinish()
          break
        }
        case 'CHAT_MINIMIZE': {
          handleMinimize()
          break
        }
        case 'CHAT_UNMINIMIZE': {
          handleUnminimize()
          break
        }
        case 'CHAT_SEND': {
          console.log('post chat done')
          break
        }
      }
    }
  }

  window.addEventListener('message', handleMessage)

  // Start WebChat
  $(chatButton).on('click', function (e) {
    e.stopPropagation()
    window.postMessage(startChatAction(), '*')
  })

  $(openButton).on('click', function (e) {
    e.stopPropagation()
    if (state.isOpen) {
      window.postMessage(finishChatAction(), '*')
    } else {
      window.postMessage(startChatAction(), '*')
    }
  })

  // Minimize or Unminimize WebChat
  $('.minimizeButton').on('click', function (e) {
    e.stopPropagation()
    if (state.isMinimized) {
      window.postMessage(unminimizeChatAction(), '*')
    } else {
      window.postMessage(minimizeChatAction(), '*')
    }
  })

  // Close WebChat
  $('.closeButton').on('click', function (e) {
    e.stopPropagation()
    window.postMessage(finishChatAction(), '*')
  })

  WebChat.renderWebChat(
    {
      apiPath: 'http://localhost:8080/',
      width: '360px',
      height: '550px',
      title: 'CLOVA Chatbot!',
      placeholder: 'Do you have any questions?',
      backgroundColor: '#7793bf',
      backgroundImage: '',
      headerHeight: '50px',
      avatarBackgroundColor: '#bbbfc3',
      avatarImage: '',
      bubbleStyle: 'rounded', // [rounded, square]
      bubbleRadius: '12px',
      bubbleColor: 'rgb(80,80,80)',
      bubbleBackgroundColor: 'rgb(243,243,237)',
      bubbleFontSize: '14px',
      userBubbleStyle: 'rounded', // [rounded, square]
      userBubbleRadius: '12px',
      userBubbleColor: 'rgb(80,80,80)',
      userBubbleBackgroundColor: '#3cd77d',
      userBubbleFontSize: '14px',
    },
    document.querySelector(chatContainer)
  )
})
