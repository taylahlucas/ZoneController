import store from '../services/store'
import { addZones, setActive } from '../services/zoneSlice'

const data = {
  zones: [
      {
        "id": 13,
        "name": "Zone 1",
        "icon": {
          "id": 1,
          "fileName": "leaf.png"
        },
        "suspended": false,
        "status": {
          "running": true
        }
      }
  ]
}

describe('Zone state tests', () => {
  it('should have an initial state', () => {
      const state = store.getState().zoneSlice
      expect(state.zones).toEqual([])
  })

  it('should fetch the initial zone data', () => {
      const result = store.dispatch(addZones(data.zones))        
      expect(result.payload).toBe(data.zones)
      const state = store.getState().zoneSlice
      expect(state).toEqual(data)
  })

  it('should update the running status from true to false when clicked', () => {
    store.dispatch(addZones(data.zones))
    const inputData = {
      id: data.zones[0].id,
      active: !data.zones[0].status.running
    }
    store.dispatch(setActive(inputData))
    const result = store.getState().zoneSlice
    expect(result.zones[0].status.running).toBe(false)
  })

  it('should update the running status from false to true when clicked', () => {
    const secondaryData = {
      zones: [
        {
            "id": 13,
            "name": "Zone 1",
            "icon": {
              "id": 1,
              "fileName": "leaf.png"
            },
            "suspended": false,
            "status": {
              "running": false
            }
          }
      ]
    }
    
    store.dispatch(addZones(secondaryData.zones))
    const inputData = {
      id: secondaryData.zones[0].id,
      active: !secondaryData.zones[0].status.running
    }
    store.dispatch(setActive(inputData))
    const result = store.getState().zoneSlice
    expect(result.zones[0].status.running).toBe(true)
  })
})