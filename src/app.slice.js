import { createAction, createSlice } from '@reduxjs/toolkit'

export const resetCode = createAction('resetCode')
const app = createSlice({
  name: 'app',
  initialState: {
    status: 200,
    loading: 0
  },
  extraReducers: builder => {
    builder
      .addCase(resetCode, (state, action) => {
        state.status = 200
      })
      .addMatcher(
        action => action.type.endsWith('/pending'),
        state => {
          state.loading = state.loading + 1
        }
      )
      .addMatcher(
        action =>
          action.type.endsWith('/rejected') ||
          action.type.endsWith('/fulfilled'),
        (state, action) => {
          state.status = action.payload.status
          state.loading = state.loading - 1
        }
      )
  }
})

const appReducer = app.reducer
export default appReducer
