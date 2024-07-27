import { createSlice } from '@reduxjs/toolkit'
import { darkTheme, lightTheme } from '../../utils/Themes.js';

const initialState = { theme:darkTheme }

const counterSlice = createSlice({
  name: 'currentTheme',
  initialState,
  reducers: {
    setDark:(state)=> {
      state.theme=darkTheme;
    },
    setLight:(state)=> {
      state.theme=lightTheme;
    },
    
  },
})

export const { setDark, setLight } = counterSlice.actions
export default counterSlice.reducer