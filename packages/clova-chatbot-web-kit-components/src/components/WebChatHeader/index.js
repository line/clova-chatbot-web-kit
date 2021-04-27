import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { MdClose } from 'react-icons/md'
import { StyleContext } from '../../context'

const Wrapper = styled.div`
  height: ${(props) => props.height};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 0 1 auto;
  background-color: #303b51;
  box-sizing: border-box;
  padding: 10px;
  overflow: hidden;
  :hover {
    cursor: pointer;
  }
`

const TitleWrapper = styled.div`
  color: white;
`

const ActionList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  li {
    margin: 0;
    padding: 0;
    font-size: 20px;
    height: 1em;
    line-height: 1;
    color: white;
    float: left;
    transition: all 0.3s;
    &:hover {
      cursor: pointer;
      opacity: 0.6;
    }
  }
  li + li {
    margin-left: 4px;
  }
`

const propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func,
  onMinimize: PropTypes.func,
}

const WebChatHeader = (props) => {
  const { title, onClose, onMinimize } = props
  const styles = useContext(StyleContext)
  const { headerHeight } = styles

  return (
    <Wrapper
      className="web-chat-header"
      height={headerHeight}
      onClick={onMinimize}
    >
      <TitleWrapper>{title}</TitleWrapper>
      <ActionList>
        <li>
          <MdClose onClick={onClose} />
        </li>
      </ActionList>
    </Wrapper>
  )
}

WebChatHeader.propTypes = propTypes
export default WebChatHeader
