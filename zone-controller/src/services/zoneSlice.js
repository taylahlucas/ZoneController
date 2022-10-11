import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    zones: []
}

const zoneSlice = createSlice({
    name: 'zoneStatus',
    initialState: initialState,
    reducers: {
        addZones: (state, action) => {
            return {
                ...state,
                zones: action.payload
            }
        },
        setActive: (state, action) => {
            return {
                ...state,
                zones: state.zones.map(item => {
                    if (item.id == action.payload.id) {
                        return { ...item, status: { running: action.payload.active }}
                    }
                    return item
                })
            }
        },
        setSuspended: (state, action) => {
            return {
                ...state,
                zones: state.zones.map(item => {
                    if (item.id == action.payload.id) {
                        return { ...item, suspended: action.payload.enabled}
                    }
                    return item
                })
            }
        }
    }
})

export const { addZones, setActive, setSuspended } = zoneSlice.actions

export default zoneSlice.reducer