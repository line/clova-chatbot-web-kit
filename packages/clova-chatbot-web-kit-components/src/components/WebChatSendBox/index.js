import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { MdSend } from 'react-icons/md'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 1 auto;
  height: 50px;
  width: 100%;
  background-color: white;
  box-sizing: border-box;
`

const MessageInput = styled.input`
  font-size: 16px;
  width: 100%;
  background-color: #fff;
  border: none;
  outline: none;
  box-sizing: border-box;
  padding: 8px;
  ::placeholder {
    color: #bbb;
  }
`

const SendIcon = styled.div`
  height: 24px;
  padding: 0 10px 0 10px;
  font-size: 24px;
  line-height: 1;
  color: lightslategray;
  transition: all 0.3s;
  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`

const propTypes = {
  userId: PropTypes.string,
  placeholder: PropTypes.string,
  onSendMessage: PropTypes.func,
}

const WebChatSendBox = (props) => {
  const { userId, placeholder, onSendMessage } = props
  const [text, setText] = useState('')

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleKeyPress = (e) => {
    if (text === '') return

    if (e.key === 'Enter') {
      onSendMessage({ userId, text })
      setText('')
    }
  }

  const handleSendMessage = (e) => {
    if (text === '') return

    onSendMessage({ userId, text })
    setText('')
  }

  return (
    <Wrapper className="web-chat-send-box">
      <MessageInput
        placeholder={placeholder}
        value={text}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <SendIcon onClick={handleSendMessage}>
        <MdSend />
      </SendIcon>
    </Wrapper>
  )
}

WebChatSendBox.propTypes = propTypes
export default WebChatSendBox
