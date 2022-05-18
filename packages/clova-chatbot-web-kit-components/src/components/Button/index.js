import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { MdKeyboardArrowRight } from 'react-icons/md'

import { StyleContext } from '../../context'
import { useAction } from '../../hooks'

const Wrapper = styled.div`
  position: relative;
  margin: 0;
  word-break: break-all;
  overflow: hidden;
  background-color: ${(props) => props.backgroundColor};
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  padding: 10px 16px;
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  .icon {
    display: inline-block;
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 1.7em;
  }
  p {
    margin: 0 1.7em 0 0;
  }
  transition: all 0.2s ease-in-out;
  :hover {
    cursor: pointer;
    opacity: 0.9;
  }
`

const propTypes = {
  data: PropTypes.shape({
    type: PropTypes.string,
    action: PropTypes.shape({
      type: PropTypes.string,
      data: PropTypes.shape({
        url: PropTypes.string,
      }),
    }),
  }),
  userId: PropTypes.string,
  type: PropTypes.string,
  title: PropTypes.string,
  onSendMessage: PropTypes.func,
}
const Button = (props) => {
  const { userId, title, data, onSendMessage } = props
  const [onAction] = useAction({ userId, onSendMessage })
  const styles = useContext(StyleContext)
  const { bubbleFontSize, buttonColor, buttonBackgroundColor } = styles

  if (data && data.action) {
    return (
      <Wrapper
        fontSize={bubbleFontSize}
        color={buttonColor}
        backgroundColor={buttonBackgroundColor}
      >
        <div onClick={() => onAction(data)}>
          <MdKeyboardArrowRight className="icon" />
          <p>{title}</p>
        </div>
      </Wrapper>
    )
  } else {
    return (
      <Wrapper>
        <div>
          <MdKeyboardArrowRight className="icon" />
          <p>{title}</p>
        </div>
      </Wrapper>
    )
  }
}

Button.propTypes = propTypes
export default Button
