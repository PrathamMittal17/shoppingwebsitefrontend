import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  canPay : true,
}

export const canPaySlice = createSlice({
  name: 'canPayControl',
  initialState,
  reducers: {
   
   setCanPay: (state,action) => {
          state.canPay = action.payload;
          },
    },
}

)


// Action creators are generated for each case reducer function
export const {setCanPay} = canPaySlice.actions

export default canPaySlice.reducer