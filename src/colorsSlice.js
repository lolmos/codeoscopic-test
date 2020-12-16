import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


// First, create the thunk
// const fetchUserById = createAsyncThunk(
//   'users/fetchByIdStatus',
//   async (userId, thunkAPI) => {
//     const response = await userAPI.fetchById(userId)
//     return response.data
//   }
// )

const colorsURL = "http://www.colr.org/json/colors/random/10"
// First, create the thunk
const fetchColors = createAsyncThunk(
  async (colorsURL) => {
    const response = await fetch(colorsURL)
    return response.data.colors
  }
)


// Then, handle actions in your reducers:
const colorsSlice = createSlice({
  name: 'usecolors',
  initialState: { entities: [], loading: 'idle' },
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    [fetchColors.fulfilled]: (state, action) => {
      // Add user to the state array
      const fetchedColors = action.payload
      state.entities = [...fetchedColors]
    }
  }
})

export const { addListItem, removeListItem } = colorsSlice.actions

// Later, dispatch the thunk as needed in the app
// dispatch(fetchColors())