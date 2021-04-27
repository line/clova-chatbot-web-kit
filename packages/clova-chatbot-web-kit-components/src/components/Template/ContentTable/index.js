import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Button from '../../Button'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`

const propTypes = {
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
  userId: PropTypes.string,
  width: PropTypes.string,
  onSendMessage: PropTypes.func,
}

const ContentTable = (props) => {
  const { contentTable, userId, onSendMessage } = props

  const mapContentTable = () => {
    return contentTable
      .map((items, i) => {
        return items.map((item, j) => {
          const { data } = item
          if (data && data.type === 'button') {
            return (
              <Button key={j} {...{ ...data, userId, onSendMessage }}></Button>
            )
          } else {
            return null
          }
        })
      })
      .filter(Boolean)
  }

  if (Array.isArray(contentTable)) {
    return <Wrapper>{mapContentTable()}</Wrapper>
  } else {
    return <Wrapper></Wrapper>
  }
}

ContentTable.propTypes = propTypes
export default ContentTable
