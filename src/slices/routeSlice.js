import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  route : 'loggedout',
}

export const routeChangeSlice = createSlice({
  name: 'routeChange',
  initialState,
  reducers: {
   changeRoute: (state,action) => {
      state.route = action.payload;
      },
    },
}

)


// Action creators are generated for each case reducer function
export const { changeRoute} = routeChangeSlice.actions

export default routeChangeSlice.reducer