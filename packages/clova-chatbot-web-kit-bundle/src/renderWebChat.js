import React from 'react'
import ReactDOM from 'react-dom'

import ReactWebChat from './ReactWebChat'

export function renderWebChat(props, element) {
  ReactDOM.render(<ReactWebChat {...props} root={element} />, element)
}
