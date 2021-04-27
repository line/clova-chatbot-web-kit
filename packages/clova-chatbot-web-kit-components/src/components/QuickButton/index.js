import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { useAction } from '../../hooks'

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: max-content;
  padding: 10px 20px 16px 20px;
  span {
    display: inline-block;
    fload: left;
    background-color: rgba(0, 0, 0, 0.4);
    color: #ffffff;
    font-size: 10px;
    border-radius: 1.2em;
    padding: 4px 12px 4px 12px;
    transition: all 0.2s ease-in-out;
    :hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }
  span + span {
    margin-left: 8px;
  }
`

const propTypes = {
  userId: PropTypes.string,
  buttons: PropTypes.array,
  onSendMessage: PropTypes.func,
}

const QuickButton = (props) => {
  const { userId, buttons, onSendMessage } = props
  const [onAction] = useAction({ userId, onSendMessage })

  const mapButtons =
    Array.isArray(buttons) &&
    buttons.map((item, i) => {
      const { data } = item
      return (
        <span className="quick-button" key={i} onClick={() => onAction(data)}>
          {item.title}
        </span>
      )
    })

  return <Wrapper>{mapButtons}</Wrapper>
}

QuickButton.propTypes = propTypes
export default QuickButton
