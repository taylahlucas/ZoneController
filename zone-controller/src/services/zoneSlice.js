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
                    if (item.id === action.payload.id) {
                        return { ...item, status: { running: action.payload.active }}
                    }
                    return item
                })
            }
        },
        // TODO: Remove this ? 
        updatedSuspendedZones: (state, action) => {
            return {
                ...state,
                zones: state.zones.map((item, index) => {
                    if (item.suspended !== action.payload[index].suspended) {
                        switch (action.payload[index].suspended) {
                            case false: 
                                // Change running status if suspended status changes to false
                                return { 
                                    ...item, 
                                    status: { running: false },
                                    suspended: action.payload[index].suspended,
                                }
                            case true:
                                return { 
                                    ...item, 
                                    suspended: action.payload[index].suspended,
                                }
                        }
                    }
                    return item
                })
            }
        }
    }
})

export const { addZones, setActive, updatedSuspendedZones } = zoneSlice.actions

export default zoneSlice.reducer