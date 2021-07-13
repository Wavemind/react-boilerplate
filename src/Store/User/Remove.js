import { createAction } from '@reduxjs/toolkit'

export default {
  initialState: {},
  action: createAction('user/remove'),
  reducers(state, { payload }) {
    state.item = {}
  },
}
