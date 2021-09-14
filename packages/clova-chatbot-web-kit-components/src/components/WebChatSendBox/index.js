import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { MdSend } from 'react-icons/md'
import { StyleContext } from '../../context'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 1 auto;
  height: 50px;
  width: 100%;
  background-color: white;
  border-bottom-left-radius: ${(props) =>
    props.borderBottomLeftRadius ? `${props.borderBottomLeftRadius}` : `0`};
  border-bottom-right-radius: ${(props) =>
    props.borderBottomRightRadius ? `${props.borderBottomRightRadius}` : `0`};
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
  const styles = useContext(StyleContext)
  const { borderBottomLeftRadius, borderBottomRightRadius } = styles

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

  const handleSendMessage = () => {
    if (text === '') return

    onSendMessage({ userId, text })
    setText('')
  }

  return (
    <Wrapper
      className="web-chat-send-box"
      borderBottomLeftRadius={borderBottomLeftRadius}
      borderBottomRightRadius={borderBottomRightRadius}
    >
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
