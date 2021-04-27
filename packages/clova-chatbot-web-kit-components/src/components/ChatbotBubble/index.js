import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import 'react-perfect-scrollbar/dist/css/styles.css'
import PerfectScrollbar from 'react-perfect-scrollbar'

import Avatar from '../Avatar'
import Carousel from '../Carousel'
import Template from '../Template'
import Timestamp from '../Timestamp'
import Text from '../Text'
import Image from '../Image'
import { StyleContext } from '../../context'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  padding: 10px 0 10px 16px;
`

const AvatarWrapper = styled.div`
  margin-right: 14px;
`

const BubbleWrapper = styled.div`
  display: flex;
  width: 70%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: transparent;
  overflow: hidden;
`

const BubbleInner = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
  background-color: ${(props) => props.backgroundColor};
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
  border-radius: ${(props) => props.borderRadius};
  overflow: hidden;
`

const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: transparent;
  overflow: hidden;
  .scrollbar-container {
    height: auto;
  }
  .ps__rail-x {
    border-radius: 8px;
  }
  .ps .ps__rail-x:hover,
  .ps .ps__rail-y:hover,
  .ps .ps__rail-x:focus,
  .ps .ps__rail-y:focus,
  .ps .ps__rail-x.ps--clicking,
  .ps .ps__rail-y.ps--clicking {
    background-color: rgba(255, 255, 255, 0.3);
  }
  .ps__thumb-x {
    background-color: rgba(0, 0, 0, 0.3);
    bottom: 3px;
  }
  .ps__rail-x:hover > .ps__thumb-x,
  .ps__rail-x:focus > .ps__thumb-x,
  .ps__rail-x.ps--clicking .ps__thumb-x {
    background-color: rgba(0, 0, 0, 0.4);
    height: 9px;
  }
`

const propTypes = {
  userId: PropTypes.string,
  bubble: PropTypes.any,
  timestamp: PropTypes.number,
  onSendMessage: PropTypes.func,
}

const ChatbotBubble = (props) => {
  const { userId, bubble, timestamp, onSendMessage } = props
  const styles = useContext(StyleContext)
  const { bubbleRadius, bubbleStyle, bubbleBackgroundColor } = styles

  if (!bubble || !bubble.type) {
    return
  }

  const Bubble = ({ bubble }) => {
    const { type, data } = bubble
    switch (type) {
      case 'text': {
        return (
          <BubbleWrapper>
            <BubbleInner
              backgroundColor={bubbleBackgroundColor}
              borderRadius={bubbleStyle === 'square' ? '0' : bubbleRadius}
            >
              <Text {...{ ...bubble, userId, onSendMessage }} />
            </BubbleInner>
            <Timestamp timestamp={timestamp} />
          </BubbleWrapper>
        )
      }
      case 'image': {
        return (
          <BubbleWrapper>
            <BubbleInner
              backgroundColor={bubbleBackgroundColor}
              borderRadius={bubbleStyle === 'square' ? '0' : bubbleRadius}
            >
              <Image {...{ ...bubble, userId, onSendMessage }} />
            </BubbleInner>
            <Timestamp timestamp={timestamp} />
          </BubbleWrapper>
        )
      }
      case 'template': {
        return (
          <BubbleWrapper>
            <Template {...{ ...bubble, userId, onSendMessage }} />
            <Timestamp timestamp={timestamp} />
          </BubbleWrapper>
        )
      }
      case 'carousel': {
        const { cards } = data
        return (
          <CarouselWrapper>
            <PerfectScrollbar>
              <Carousel {...{ cards, userId, onSendMessage }} />
            </PerfectScrollbar>
            <Timestamp timestamp={timestamp} />
          </CarouselWrapper>
        )
      }
      default: {
        return (
          <BubbleWrapper>
            <BubbleInner
              backgroundColor={bubbleBackgroundColor}
              borderRadius={bubbleStyle === 'square' ? '0' : bubbleRadius}
            >
              <Text {...{ ...bubble, userId, onSendMessage }} />
            </BubbleInner>
            <Timestamp timestamp={timestamp} />
          </BubbleWrapper>
        )
      }
    }
  }

  return (
    <Wrapper>
      <AvatarWrapper>
        <Avatar style={{ marginTop: '-0.2em' }} />
      </AvatarWrapper>
      <Bubble bubble={bubble} />
    </Wrapper>
  )
}

ChatbotBubble.propTypes = propTypes
export default ChatbotBubble
