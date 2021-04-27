const useAction = (props) => {
  const { userId, onSendMessage } = props

  const onAction = ({ action }) => {
    switch (action.type) {
      case 'postback': {
        const params = {
          userId,
          text: action.data && action.data.postback,
          event: 'send',
        }
        onSendMessage(params)
        break
      }
      case 'utterance': {
        /* @todo */
        const params = {
          userId,
          text: action.data && action.data.postback,
          event: 'send',
        }
        onSendMessage(params)
        break
      }
      case 'link': {
        if (action.data && action.data.url) {
          window.open(action.data.url, '_blank')
        }
        break
      }
      case 'phone': {
        /* @todo */
        const params = {
          userId,
          number: action.data && action.data.number,
          event: 'send',
        }
        onSendMessage(params)
        break
      }
    }
  }

  return [onAction]
}

export default useAction
