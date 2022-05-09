const useAction = (props) => {
  const { userId, onSendMessage } = props

  const onAction = ({ action }) => {
    switch (action.type) {
      case 'postback': {
        const params = {
          userId,
          text: action.data?.displayText || action.data?.postbackFull,
          userChatText: action.data?.displayText || action.data?.postback,
          event: 'send',
        }
        onSendMessage(params)
        break
      }
      case 'utterance': {
        /* @todo */
        const params = {
          userId,
          text: action.data?.postback,
          userChatText: action.data?.text,
          event: 'send',
        }
        onSendMessage(params)
        break
      }
      case 'link': {
        if (action.data?.url) {
          window.open(action.data.url, '_blank')
        }
        break
      }
      case 'phone': {
        /* @todo Create chatbot bubbles with a phone number and contact name */
        break
      }
    }
  }

  return [onAction]
}

export default useAction
