import { configureStore } from '@reduxjs/toolkit'
import zoneSlice from './zoneSlice'

const store = configureStore({
    reducer: {
        zoneSlice: zoneSlice
    }
})

export default store