import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { useAction } from '../../hooks'

const Wrapper = styled.div`
  position: relative;
  width: ${(props) => props.width || 'inherit'};
  height: ${(props) => props.width || 'inherit'};
`

const ImageType = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  :hover {
    cursor: ${(props) => props.cursor || 'default'};
  }
`

const propTypes = {
  data: PropTypes.shape({
    action: PropTypes.shape({
      type: PropTypes.string,
      data: PropTypes.shape({
        url: PropTypes.string,
      }),
    }),
    imageUrl: PropTypes.string,
    description: PropTypes.string,
  }),
  userId: PropTypes.string,
  type: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  width: PropTypes.string,
  onSendMessage: PropTypes.func,
}

const Image = (props) => {
  const { data, width, userId, onSendMessage } = props
  const imageUrl = data.imageUrl
  const action = data.action
  const [onAction] = useAction({ userId, onSendMessage })

  return (
    <Wrapper className="image" width={width}>
      {action ? (
        <ImageType
          src={imageUrl}
          cursor="pointer"
          onClick={() => onAction(data)}
        />
      ) : (
        <ImageType src={imageUrl} />
      )}
    </Wrapper>
  )
}

Image.propTypes = propTypes
export default Image
