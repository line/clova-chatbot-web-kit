import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { StyleContext } from '../../context'
import Timestamp from '../Timestamp'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  padding: 10px 16px;
`

const BubbleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  background-color: transparent;
  overflow: hidden;
  width: 70%;
`
const Bubble = styled.div`
  background-color: ${(props) => props.backgroundColor};
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
  padding: 10px 16px;
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  letter-spacing: 0.02em;
  line-height: 1.6em;
  border-radius: ${(props) => props.borderRadius};
  overflow: hidden;
`

const propTypes = {
  text: PropTypes.string,
  timestamp: PropTypes.number,
}

const UserBubble = (props) => {
  const { text, timestamp } = props
  const styles = useContext(StyleContext)
  const {
    bubbleRadius,
    bubbleStyle,
    bubbleColor,
    bubbleBackgroundColor,
    bubbleFontSize,
    userBubbleStyle,
    userBubbleRadius,
    userBubbleColor,
    userBubbleBackgroundColor,
    userBubbleFontSize,
  } = styles

  const getBubbleRadius = () => {
    if (userBubbleStyle) {
      if (userBubbleStyle === 'rounded' && userBubbleRadius) {
        return userBubbleRadius
      } else {
        return 0 // square
      }
    }
    // default value
    if (bubbleStyle === 'rounded' && bubbleRadius) {
      return bubbleRadius
    } else {
      return 0 // square
    }
  }

  const bubbleProps = {
    color: userBubbleColor || bubbleColor,
    backgroundColor: userBubbleBackgroundColor || bubbleBackgroundColor,
    fontSize: userBubbleFontSize || bubbleFontSize,
    borderRadius: getBubbleRadius(),
  }

  return (
    <Wrapper>
      <BubbleWrapper>
        <Bubble {...bubbleProps}>{text}</Bubble>
        <Timestamp timestamp={timestamp} />
      </BubbleWrapper>
    </Wrapper>
  )
}

UserBubble.propTypes = propTypes
export default UserBubble
