import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  total : 0,
}

export const cartItemsTotalSlice = createSlice({
  name: 'changeCartTotal',
  initialState,
  reducers: {
   IncreaseTotal: (state) => {
      state.total += 1;
      },
   DecreaseTotal: (state) => {
        state.total -= 1;
        },
   SetTotal: (state,action) => {
          state.total = action.payload;
          },
    },
}

)


// Action creators are generated for each case reducer function
export const { IncreaseTotal,DecreaseTotal,SetTotal} = cartItemsTotalSlice.actions

export default cartItemsTotalSlice.reducer