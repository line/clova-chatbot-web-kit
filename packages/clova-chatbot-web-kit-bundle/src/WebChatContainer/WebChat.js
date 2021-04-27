import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import {
  WebChatHeader,
  WebChatBody,
  WebChatSendBox,
  StyleContext,
} from '@line/clova-chatbot-web-kit-components'

import { usePostMessage, useResponsive } from '../hooks'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.backgroundColor};
  url(${(props) => `background-image: ${props.backgroundImage}`});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  transition: all 0.3s ease-in-out;
  .web-chat-header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: ${(props) => props.headerHeight};
    z-index: 1;
  }
  .web-chat-body {
    padding-top: ${(props) => props.headerHeight};
    padding-bottom: 50px;
  }
  .web-chat-send-box {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
  }
`

const propTypes = {
  app: PropTypes.shape({
    userId: PropTypes.string,
    activities: PropTypes.array,
    isMinimized: PropTypes.bool,
    error: PropTypes.any,
    loading: PropTypes.bool,
  }),
  onInitApp: PropTypes.func,
  onMinimize: PropTypes.func,
  onSendMessage: PropTypes.func,
}

const WebChat = (props) => {
  const { app, onInitApp, onMinimize, onSendMessage } = props
  const { userId, isMinimized } = app
  const styles = useContext(StyleContext)
  const {
    root,
    width,
    height,
    title,
    placeholder,
    backgroundColor,
    backgroundImage,
    headerHeight,
  } = styles

  const isMobile = useMediaQuery({ query: '(max-width: 575px)' })
  const {
    finishChatAction,
    minimizeChatAction,
    unminimizeChatAction,
  } = usePostMessage({ root, userId, onInitApp, onMinimize, onSendMessage })
  useResponsive({ root, width, height, headerHeight, isMinimized, isMobile })

  return (
    <Wrapper
      className="web-chat-container"
      headerHeight={headerHeight}
      backgroundColor={backgroundColor}
      backgroundImage={backgroundImage}
    >
      <WebChatHeader
        title={title}
        onClose={(e) => {
          e.stopPropagation()
          window.postMessage(finishChatAction(), '*')
        }}
        onMinimize={(e) => {
          e.stopPropagation()
          isMinimized
            ? window.postMessage(unminimizeChatAction(), '*')
            : window.postMessage(minimizeChatAction(), '*')
        }}
      />
      <WebChatBody {...app} onSendMessage={onSendMessage} />
      <WebChatSendBox
        userId={userId}
        placeholder={placeholder}
        onSendMessage={onSendMessage}
      />
    </Wrapper>
  )
}

WebChat.propTypes = propTypes
export default WebChat
