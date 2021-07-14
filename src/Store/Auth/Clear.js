import { createAction } from '@reduxjs/toolkit'

export default {
  initialState: {},
  action: createAction('auth/clear'),
  reducers(state, { payload }) {
    state.item = {}
  },
}
