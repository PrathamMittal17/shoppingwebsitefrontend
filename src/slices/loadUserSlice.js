import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {},
}

export const loadUserSlice = createSlice({
  name: 'loadUser',
  initialState,
  reducers: {
   loadUserAccount: (state, action) => {
      return Object.assign({},state,{
          user:action.payload
          })
      },
    },
}

)


// Action creators are generated for each case reducer function
export const { loadUserAccount} = loadUserSlice.actions

export default loadUserSlice.reducer