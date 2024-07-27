import { createSlice } from '@reduxjs/toolkit'

const initialState = { visible : false,
  left : -1000
}

const dashSlice = createSlice({
  name: 'dash',
  initialState,
  reducers: {
    makeVisible:(state)=> {
        state.left=-10;
        state.visible=true;
    },
    makeInvisible:(state)=> {
        state.left=-1000;
      state.visible=false;
    },
    
  },
})

export const { makeVisible , makeInvisible } = dashSlice.actions
export default dashSlice.reducer