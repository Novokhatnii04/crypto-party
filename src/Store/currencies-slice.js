import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    currencies: []
}

const currenciesSlice = createSlice({
    name: 'currencies',
    initialState,
    reducers: {
        getTokens(state, actions) {
            state.currencies.push(actions.payload)
        }
    }
})

export default currenciesSlice
export const currenciesSliceActions = currenciesSlice.actions