import { configureStore } from "@reduxjs/toolkit";
import headerStatusBar from "./header-status-bar-slice";
import currenciesSlice from "./currencies-slice";

const store = configureStore({
    reducer: {
        headerStatusBar: headerStatusBar.reducer,
        currenciesSlice: currenciesSlice.reducer
    }
})

export default store