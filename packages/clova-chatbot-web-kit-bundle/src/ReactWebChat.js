import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { configureStore, initApp } from '@line/clova-chatbot-web-kit-core'
import {
  defaultStyles,
  StyleContext,
} from '@line/clova-chatbot-web-kit-components'
import WebChatContainer from './WebChatContainer'

const { store, persistor } = configureStore()
const { dispatch } = store

const propTypes = {
  root: PropTypes.any,
  apiPath: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  title: PropTypes.string,
  cardWidth: PropTypes.string,
  placeholder: PropTypes.string,
  backgroundColor: PropTypes.string,
  backgroundImage: PropTypes.string,
  headerHeight: PropTypes.string,
  avatarImage: PropTypes.string,
  bubbleStyle: PropTypes.string,
  bubbleRadius: PropTypes.string,
  bubbleColor: PropTypes.string,
  bubbleBackgroundColor: PropTypes.string,
  bubbleFontSize: PropTypes.string,
}

const ReactWebChat = (props) => {
  const { root, apiPath } = props
  const styles = { ...defaultStyles, ...props }

  /**
   * Initialize styles
   *
   * CARD_WIDTH_RATIO: cardWidth / chat body width
   * cardWidth: carousel card width
   *
   * @todo in case of percentage value
   * @todo allow only px and %
   */
  if (!styles.cardWidth) {
    const CARD_WIDTH_RATIO = 0.6
    if (root) {
      const styleWidth = styles.width
      const width = styleWidth.replace(/[^0-9]/g, '')
      styles.cardWidth = Math.ceil(Number(width) * CARD_WIDTH_RATIO) + 'px'
    }
  }

  /**
   * Initialize App
   */
  dispatch(initApp({ apiPath }))

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StyleContext.Provider value={styles}>
          <WebChatContainer />
        </StyleContext.Provider>
      </PersistGate>
    </Provider>
  )
}

ReactWebChat.propTypes = propTypes
export default ReactWebChat
