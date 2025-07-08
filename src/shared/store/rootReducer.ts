import { combineReducers } from '@reduxjs/toolkit'
import headerReducer from '@/widgets/Header/model/headerSlice'
import summarySlice from "@/widgets/Summary/model/summarySlice";

export const rootReducer = combineReducers({
    header: headerReducer,
    summary: summarySlice,
})