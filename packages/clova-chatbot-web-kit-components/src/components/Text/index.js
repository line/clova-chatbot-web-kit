import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { StyleContext } from '../../context'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

const TextType = styled.div`
  width: ${(props) => props.width || 'inherit'};
  padding: 10px 16px;
  white-space: pre-wrap;
  word-break: break-all;
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  letter-spacing: 0.02em;
  line-height: 1.6em;
  p {
    margin-bottom: 0;
    &.title {
      font-weight: bold;
    }
    &.description {
      font-weight: normal;
    }
  }
  p + p {
    margin-top: 4px;
  }
`

const propTypes = {
  data: PropTypes.shape({
    description: PropTypes.string,
    url: PropTypes.string,
    urlAlias: PropTypes.string,
    action: PropTypes.object, // 一旦無視
  }),
  userId: PropTypes.string,
  type: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  width: PropTypes.string,
  onSendMessage: PropTypes.func,
}

const Text = (props) => {
  const {
    data: { description, url, urlAlias },
    width,
  } = props
  const styles = useContext(StyleContext)
  const { bubbleFontSize, bubbleColor } = styles

  return (
    <Wrapper>
      <TextType width={width} fontSize={bubbleFontSize} color={bubbleColor}>
        <p>{description}</p>
        {url && (
          <p>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {urlAlias}
            </a>
          </p>
        )}
      </TextType>
    </Wrapper>
  )
}

Text.propTypes = propTypes
export default Text
