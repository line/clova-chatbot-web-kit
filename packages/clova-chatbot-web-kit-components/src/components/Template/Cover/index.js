import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { StyleContext } from '../../../context'
import Image from '../../Image'
import Text from '../../Text'

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: transparent;
`

const TextType = styled.div`
  padding: 10px 16px;
  white-space: pre-wrap;
  word-break: break-all;
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  letter-spacing: 0.02em;
  line-height: 1.6em;
  overflow: hidden;
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
  type: PropTypes.string,
  title: PropTypes.string,
  data: PropTypes.shape({
    imageUrl: PropTypes.string,
    description: PropTypes.string,
  }),
  width: PropTypes.string,
}

const Cover = (props) => {
  const { type, title, data } = props
  const styles = useContext(StyleContext)
  const { bubbleColor, bubbleFontSize } = styles
  const description = data && data.description ? data.description : ''

  switch (type) {
    case 'image': {
      return (
        <ImageWrapper>
          <Image {...props} />
          {(title || description) && (
            <TextType color={bubbleColor} fontSize={bubbleFontSize}>
              {title && <p className="title">{title}</p>}
              {description && <p className="description">{description}</p>}
            </TextType>
          )}
        </ImageWrapper>
      )
    }
    case 'text': {
      return <Text {...props} />
    }
    default: {
      return <Text {...props} />
    }
  }
}

Cover.propTypes = propTypes
export default Cover
