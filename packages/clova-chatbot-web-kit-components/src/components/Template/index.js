import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { StyleContext } from '../../context'
import ContentTable from './ContentTable'
import Cover from './Cover'
// import FootTable from './FootTable'

const Wrapper = styled.div`
  position: relative;
  width: ${(props) => (props.width ? `${props.width}` : '100%')};
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: ${(props) => props.backgroundColor};
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
  border-radius: ${(props) => props.borderRadius};
  overflow: hidden;
`

const propTypes = {
  data: PropTypes.shape({
    cover: PropTypes.shape({
      type: PropTypes.string,
      title: PropTypes.string,
      data: PropTypes.object,
    }),
    contentTable: PropTypes.arrayOf(
      PropTypes.arrayOf(
        PropTypes.shape({
          rowSpan: PropTypes.number,
          colSpan: PropTypes.number,
          data: PropTypes.shape({
            type: PropTypes.string,
            title: PropTypes.string,
            data: PropTypes.shape({
              type: PropTypes.string,
              action: PropTypes.shape({
                type: PropTypes.string,
                data: PropTypes.shape({
                  url: PropTypes.string,
                }),
              }),
            }),
          }),
        })
      )
    ),
    footTable: PropTypes.array,
  }),
  userId: PropTypes.string,
  type: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  width: PropTypes.string,
  onSendMessage: PropTypes.func,
}

const Template = (props) => {
  const {
    data: { cover, contentTable },
    userId,
    type,
    width,
    onSendMessage,
  } = props

  const styles = useContext(StyleContext)
  const { bubbleRadius, bubbleStyle, bubbleBackgroundColor, cardWidth } = styles

  if (type !== 'template') {
    return <Wrapper>There is not Template type.</Wrapper>
  }

  return (
    <Wrapper
      backgroundColor={bubbleBackgroundColor}
      borderRadius={bubbleStyle === 'square' ? '0' : bubbleRadius}
      {...{ ...(width ? { width } : { width: cardWidth }) }}
    >
      {cover && (
        <div className="cover">
          <Cover
            {...{ ...cover, ...(width ? { width } : { width: cardWidth }) }}
          />
        </div>
      )}
      {contentTable && (
        <div className="content-table">
          <ContentTable
            {...{
              contentTable,
              userId,
              onSendMessage,
              ...(width ? { width } : { width: cardWidth }),
            }}
          />
        </div>
      )}
    </Wrapper>
  )
}

Template.propTypes = propTypes
export default Template
