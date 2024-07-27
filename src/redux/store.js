import {configureStore} from "@reduxjs/toolkit"
import themeReducer from "./setTheme/setTheme.js"
import dashReducer from "./slideDashboard/dashboard.js"
// import movieReducer from "./setMovie/setMovie.js"
export const store = configureStore({
    reducer:{
        currentTheme: themeReducer,
        dash: dashReducer,
        // movieState: movieReducer,
    },
})