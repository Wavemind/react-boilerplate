import { createAction } from '@reduxjs/toolkit'

export default {
  initialState: {},
  action: createAction('user/add'),
  reducers(state, { payload }) {
    state.item = { ...payload }
  },
}
