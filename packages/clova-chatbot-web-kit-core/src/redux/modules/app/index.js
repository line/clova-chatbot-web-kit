import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { v4 } from 'uuid'
import { ERROR_MESSAGES } from '../../../config'

export const postActivity = createAsyncThunk(
  'app/postActivity',
  async ({ userId, text, event = 'send' }, { dispatch, getState }) => {
    const {
      app: { apiPath },
    } = getState()

    const result = await axios.post(`${apiPath}api/v2/message`, {
      userId,
      text,
      event,
    })
    return { user: 'chatbot', data: result.data }
  }
)

const slice = createSlice({
  name: 'app',
  initialState: {
    userId: null,
    activities: [],
    isMinimized: false,
    apiPath: null,
    error: null,
    loading: false,
  },
  reducers: {
    initApp: (state, action) => {
      const { payload } = action

      state.userId = v4()
      state.isMinimized = false
      state.error = null
      state.loading = false
      payload && payload.apiPath
        ? (state.apiPath = payload.apiPath)
        : (state.activities = [])
    },
    minimizeChat: (state, action) => {
      state.isMinimized = !!action.payload
    },
  },
  extraReducers: {
    [postActivity.pending]: (state, action) => {
      const { arg } = action.meta
      const { event } = arg
      const unixTimestamp = Math.floor(new Date().getTime())

      if (!event || event !== 'open') {
        const bubble = {
          user: 'user',
          data: {
            type: 'TEXT',
            text: arg.text,
            event,
            timestamp: unixTimestamp,
          },
        }
        state.activities = [...state.activities, bubble]
      }
      state.loading = true
    },
    [postActivity.fulfilled]: (state, action) => {
      const { payload } = action

      state.activities = [...state.activities, payload]
      state.error = null
      state.loading = false
    },
    [postActivity.rejected]: (state, action) => {
      const { error } = action
      const bubble = { user: 'chatbot', data: { bubbles: [] } }

      if (error && error.message === 'Network Error') {
        bubble.data.bubbles.push({
          type: 'error',
          data: { description: ERROR_MESSAGES.networkError },
        })

        state.activities = [...state.activities, bubble]
      } else {
        bubble.data.bubbles.push({
          type: 'error',
          data: { description: ERROR_MESSAGES.systemError },
        })

        state.activities = [...state.activities, bubble]
      }

      state.error = true
      state.loading = false
    },
  },
})

const { actions, reducer } = slice
export const { initApp, minimizeChat } = actions
export default reducer
