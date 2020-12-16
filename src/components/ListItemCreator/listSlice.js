import { createSlice } from '@reduxjs/toolkit'

const listSlice = createSlice({
  name: 'lists',
  initialState: [],
  reducers: {
    addListItem(state, action) {
      const { id, itemName, hex } = action.payload
      state.push({ id, itemName, hex })
    },
    removeListItem(state, action) {
      const id = action.payload
      const reducedState = state.filter((item) => item.id !== id)
      return reducedState
    }
  }
})

export const { addListItem, removeListItem } = listSlice.actions

export default listSlice.reducer