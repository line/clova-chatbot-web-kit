import { useEffect } from 'react'

const usePostMessage = (props) => {
  const { root, userId, onInitApp, onMinimize, onSendMessage } = props

  /**
   * Messaging Action Types
   */
  const CHAT_START = 'CHAT_START'
  const CHAT_FINISH = 'CHAT_FINISH'
  const CHAT_MINIMIZE = 'CHAT_MINIMIZE'
  const CHAT_UNMINIMIZE = 'CHAT_UNMINIMIZE'
  const CHAT_SEND = 'CHAT_SEND'

  /**
   * Action when starting a WebChat
   */
  const startChatAction = () => {
    return {
      type: CHAT_START,
      payload: {},
    }
  }

  /**
   * Action when finishing a WebChat
   */
  const finishChatAction = () => {
    return {
      type: CHAT_FINISH,
      payload: {},
    }
  }

  /**
   * Action when minimizing a WebChat
   */
  const minimizeChatAction = () => {
    return {
      type: CHAT_MINIMIZE,
      payload: {},
    }
  }

  /**
   * Action when unminimizing a WebChat
   */
  const unminimizeChatAction = () => {
    return {
      type: CHAT_UNMINIMIZE,
      payload: {},
    }
  }

  /**
   * Action when post chat message
   */
  const sendChatAction = () => {
    return {
      type: CHAT_SEND,
      payload: {},
    }
  }

  const handleStart = () => {
    // Do something when minimizing a WebChat
    onSendMessage({
      userId,
      text: 'postback text of welcome action',
      event: 'open',
    })
  }

  const handleFinish = () => {
    // Do something when minimizing a WebChat
    onInitApp()
    root.style.display = 'none'
  }

  const handleMinimize = (value) => {
    // Do something when minimizing a WebChat
    onMinimize(value)
  }

  const handleSend = (value) => {
    onSendMessage({
      userId,
      text: value,
      event: 'send',
    })
  }

  const handleMessage = (e) => {
    const { data } = e
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
          handleMinimize(true)
          break
        }
        case 'CHAT_UNMINIMIZE': {
          handleMinimize(false)
          break
        }
        case 'CHAT_SEND': {
          handleSend(data.payload)
          break
        }
      }
    }
  }

  const addMessageListener = () =>
    window.addEventListener('message', handleMessage)

  const removeMessageListener = () =>
    window.removeEventListener('message', handleMessage)

  useEffect(() => {
    addMessageListener()
    return removeMessageListener
  }, [root, userId, onInitApp, onMinimize, onSendMessage])

  return {
    startChatAction,
    finishChatAction,
    minimizeChatAction,
    unminimizeChatAction,
    sendChatAction,
  }
}

export default usePostMessage
