import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { format } from 'date-fns'

const Wrapper = styled.div`
  background-color: transparent;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);
  letter-spacing: 0.02em;
  padding: 8px 0 15px 0;
`

const propTypes = {
  timestamp: PropTypes.number,
}

const Timestamp = ({ timestamp }) => {
  return <Wrapper>{timestamp && format(new Date(timestamp), 'k:mm')}</Wrapper>
}

Timestamp.propTypes = propTypes
export default Timestamp
