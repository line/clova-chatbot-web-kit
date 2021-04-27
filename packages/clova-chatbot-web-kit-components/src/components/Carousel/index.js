import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { StyleContext } from '../../context'
import Template from '../Template'

const Wrapper = styled.div`
  position: relative;
  width: max-content;
  height: auto;
  overflow: hidden;
  .card + .card {
    margin-left: 16px;
  }
`

const Card = styled.div`
  position: relative;
  display: inline-block;
  float: left;
  width: ${(props) => props.width};
  height: max-content;
  border-radius: ${(props) => props.borderRadius};
  background-color: transparent;
  overflow: visible;
`

const propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string, // template
      data: PropTypes.shape({
        cover: PropTypes.shape({
          type: PropTypes.string,
          title: PropTypes.string,
          data: PropTypes.object,
        }),
      }),
    })
  ),
  userId: PropTypes.string,
  onSendMessage: PropTypes.func,
}

const Carousel = (props) => {
  const { cards, userId, onSendMessage } = props
  const styles = useContext(StyleContext)
  const { bubbleRadius, bubbleStyle, cardWidth } = styles

  const mapCards =
    Array.isArray(cards) &&
    cards.map((card, i) => {
      const { type, data } = card
      if (type !== 'template' || !data) return null
      return (
        <Card
          key={i}
          className="card"
          width={cardWidth}
          borderRadius={bubbleStyle === 'square' ? '0' : bubbleRadius}
        >
          <Template {...{ ...card, userId, onSendMessage, width: cardWidth }} />
        </Card>
      )
    })

  return <Wrapper className="carousel">{mapCards}</Wrapper>
}

Carousel.propTypes = propTypes
export default Carousel
