import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    allCurrencies: null,
    activeCurrencies: null,
    totalVolume24h: null,
    btcDominance: null,
}

const headerStatusBar = createSlice({
    name: 'header-status-bar',
    initialState,
    reducers: {
        getInfoForStatusbar(state, actions) {
            state.allCurrencies = actions.payload.allCurrencies
            state.activeCurrencies = actions.payload.activeCurrencies
            state.totalVolume24h = actions.payload.totalVolume24h
            state.btcDominance = actions.payload.btcDominance
        }
    }
})

export const headerStatusBarAction = headerStatusBar.actions
export default headerStatusBar
