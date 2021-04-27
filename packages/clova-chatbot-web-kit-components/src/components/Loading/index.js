import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Avatar from '../Avatar'
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

const LoadingWrapper = styled.div`
  position: relative;
`

const LoadingInner = styled.div`
  padding: 10px 16px;
  word-break: break-all;
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  letter-spacing: 0.02em;
  line-height: 1.6em;
`

const propTypes = {
  userId: PropTypes.string,
  bubble: PropTypes.any,
  timestamp: PropTypes.number,
  onSendMessage: PropTypes.func,
}

const Loading = (props) => {
  const styles = useContext(StyleContext)
  const {
    bubbleRadius,
    bubbleStyle,
    bubbleBackgroundColor,
    bubbleFontSize,
    bubbleColor,
  } = styles

  return (
    <Wrapper>
      <AvatarWrapper>
        <Avatar style={{ marginTop: '-0.2em' }} />
      </AvatarWrapper>
      <BubbleWrapper>
        <BubbleInner
          backgroundColor={bubbleBackgroundColor}
          borderRadius={bubbleStyle === 'square' ? '0' : bubbleRadius}
        >
          <LoadingWrapper>
            <LoadingInner fontSize={bubbleFontSize} color={bubbleColor}>
              <svg version="1.1" id="L4" width="50" height="8">
                <circle fill="#ccc" stroke="none" cx="3" cy="4" r="3">
                  <animate
                    attributeName="opacity"
                    dur="1s"
                    values="0;1;0"
                    repeatCount="indefinite"
                    begin="0.1"
                  />
                </circle>
                <circle fill="#ccc" stroke="none" cx="13" cy="4" r="3">
                  <animate
                    attributeName="opacity"
                    dur="1s"
                    values="0;1;0"
                    repeatCount="indefinite"
                    begin="0.2"
                  />
                </circle>
                <circle fill="#ccc" stroke="none" cx="23" cy="4" r="3">
                  <animate
                    attributeName="opacity"
                    dur="1s"
                    values="0;1;0"
                    repeatCount="indefinite"
                    begin="0.3"
                  />
                </circle>
              </svg>
            </LoadingInner>
          </LoadingWrapper>
        </BubbleInner>
      </BubbleWrapper>
    </Wrapper>
  )
}

Loading.propTypes = propTypes
export default Loading
