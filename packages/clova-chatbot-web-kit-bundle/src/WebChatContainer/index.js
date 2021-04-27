import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Component from './WebChat'
import * as Action from './actions'
import { propsSelector } from './selector'

const mapStateToProps = (state) => {
  return propsSelector(state)
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Action, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
