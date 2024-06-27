import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    brand: null
}

export const brandSlice = createSlice({
    name: 'brand',
    initialState,
    reducers: {
        setBrandDetails : (state, action) => {
            state.brand = action.payload
        }
    }
})

export const  { setBrandDetails } = brandSlice.actions
export default brandSlice.reducer