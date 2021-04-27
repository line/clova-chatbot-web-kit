import React, { useState, useEffect, useLayoutEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classnames from 'classnames'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'
import 'react-perfect-scrollbar/dist/css/styles.css'
import PerfectScrollbar from 'react-perfect-scrollbar'

import { useScrollToBottom } from '../../hooks'
import Loading from '../Loading'
import UserBubble from '../UserBubble'
import ChatbotBubble from '../ChatbotBubble'
import QuickButton from '../QuickButton'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  .simplebar-scrollbar.simplebar-visible:before {
    opacity: 0.2;
  }
`

const ActivitiesWrapper = styled.div`
  position: relative;
  height: 100%;
  background-color: transparent;
  box-sizing: border-box;
  overflow: auto;
  &.hasQuickButtons {
    height: calc(100% - 54px);
  }
`

const QuickButtonsWrapper = styled.div`
  position: relative;
  display: none;
  &.hasQuickButtons {
    display: block;
    height: 54px;
    overflow: hidden;
    .scrollbar-container {
      height: auto;
    }
    .ps__rail-x {
      border-radius: 8px;
    }
    .ps .ps__rail-x:hover,
    .ps .ps__rail-y:hover,
    .ps .ps__rail-x:focus,
    .ps .ps__rail-y:focus,
    .ps .ps__rail-x.ps--clicking,
    .ps .ps__rail-y.ps--clicking {
      background-color: rgba(255, 255, 255, 0.3);
    }
    .ps__thumb-x {
      background-color: rgba(0, 0, 0, 0.3);
      bottom: 3px;
    }
    .ps__rail-x:hover > .ps__thumb-x,
    .ps__rail-x:focus > .ps__thumb-x,
    .ps__rail-x.ps--clicking .ps__thumb-x {
      background-color: rgba(0, 0, 0, 0.4);
      height: 9px;
    }
  }
`

const propTypes = {
  userId: PropTypes.string,
  activities: PropTypes.array,
  isMinimized: PropTypes.bool,
  error: PropTypes.any,
  loading: PropTypes.bool,
  onSendMessage: PropTypes.func,
}

const WebChatBody = (props) => {
  const { userId, activities, loading, onSendMessage } = props
  const [quickButtons, setQuickButtons] = useState([])
  const [mapActivities, setMapActivities] = useState([])
  const { onScrollToBottom } = useScrollToBottom()
  const scrollBarRef = useRef(null)

  useLayoutEffect(() => {
    const placeQuickbuttons = () => {
      if (!Array.isArray(activities)) {
        return []
      }
      const latest = activities[activities.length - 1]
      if (!latest || latest.user !== 'chatbot' || !latest.data) {
        return []
      }
      const { quickButtons } = latest.data
      if (Array.isArray(quickButtons)) {
        return quickButtons
      }
      return []
    }
    setQuickButtons(placeQuickbuttons())

    setMapActivities(
      Array.isArray(activities)
        ? activities.map((activity, i) => {
            /**
             * User Bubbles
             */
            if (activity.user === 'user') {
              const { text, timestamp } = activity.data
              const props = {
                text,
                timestamp,
              }
              return <UserBubble key={i} {...props} />
            }

            /**
             * Chatbot Bubbles
             */
            if (activity.user === 'chatbot') {
              const { timestamp, bubbles } = activity.data

              return (
                Array.isArray(bubbles) &&
                bubbles.map((bubble, j) => {
                  return (
                    <ChatbotBubble
                      key={`${i}-${j}`}
                      userId={userId}
                      bubble={bubble}
                      timestamp={timestamp}
                      onSendMessage={onSendMessage}
                    />
                  )
                })
              )
            }
            /**
             * Never reach here...
             */
            return null
          })
        : []
    )
  }, [activities])

  useEffect(() => {
    if (scrollBarRef.current) {
      const element = scrollBarRef.current.getScrollElement()
      onScrollToBottom({ element, timeout: 0, behavior: 'smooth' })
    }
  }, [loading])

  return (
    <Wrapper id="web-chat-body-id" className="web-chat-body">
      <ActivitiesWrapper
        className={classnames({ hasQuickButtons: quickButtons.length > 0 })}
      >
        <SimpleBar
          className="activities-scroll"
          forceVisible="x"
          autoHide={true}
          style={{ height: '100%' }}
          ref={scrollBarRef}
        >
          {mapActivities}
          {loading && <Loading />}
        </SimpleBar>
      </ActivitiesWrapper>
      <QuickButtonsWrapper
        className={classnames({ hasQuickButtons: quickButtons.length > 0 })}
      >
        <PerfectScrollbar className="chatbot-quick-button">
          <QuickButton
            buttons={quickButtons}
            userId={userId}
            onSendMessage={onSendMessage}
          />
        </PerfectScrollbar>
      </QuickButtonsWrapper>
    </Wrapper>
  )
}

WebChatBody.propTypes = propTypes
export default WebChatBody
