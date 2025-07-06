import { combineReducers } from '@reduxjs/toolkit'
import headerReducer from '@/widgets/Header/model/headerSlice'

export const rootReducer = combineReducers({
    header: headerReducer,
})