import {
  postActivity,
  initApp,
  minimizeChat,
} from '@line/clova-chatbot-web-kit-core'

export const onSendMessage = (value) => {
  return postActivity(value)
}

export const onInitApp = () => {
  return initApp()
}

export const onMinimize = (value) => {
  return minimizeChat(value)
}
