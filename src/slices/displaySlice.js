import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  display : ' ',
}

export const displaySlice = createSlice({
  name: 'changeDisplay',
  initialState,
  reducers: {
   changeDisplay: (state,action) => {
      state.display = action.payload;
      },
    },
}

)


// Action creators are generated for each case reducer function
export const { changeDisplay} = displaySlice.actions

export default displaySlice.reducer