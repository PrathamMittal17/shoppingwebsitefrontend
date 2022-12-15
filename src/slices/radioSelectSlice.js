import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  select : false,
}

export const radioSelectSlice = createSlice({
  name: 'radioSelect',
  initialState,
  reducers: {
   changeSelect: (state,action) => {
      state.select = action.payload;
      },
    },
}

)


// Action creators are generated for each case reducer function
export const { changeSelect} = radioSelectSlice.actions

export default radioSelectSlice.reducer