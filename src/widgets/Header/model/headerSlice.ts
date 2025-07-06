import { createSlice } from '@reduxjs/toolkit'

interface HeaderState {
    isMenuOpen: boolean
}

const initialState: HeaderState = {
    isMenuOpen: false,
}

const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen
        }
    }
})

export const { toggleMenu } = headerSlice.actions
export default headerSlice.reducer