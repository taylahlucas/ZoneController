import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { useInterval } from './utils/useInterval'
import ListView from './components/listView'
import data from './data/data.json'
import store from './services/store'
import { addZones, updatedSuspendedZones } from './services/zoneSlice'

function App() {
  const zoneData = useSelector(state => state.zoneSlice.zones)

  useEffect(() => {
    getItems()
  }, [])

  // Polling the data fetch so we can get the latest from the backend
  useInterval(() => {
    checkSuspendedZones()
  }, 5000)


  function getItems() {
    store.dispatch(addZones(data.data.controller.zones))
  }

  function checkSuspendedZones() {
    if (zoneData !== data.data.controller.zones) {
      store.dispatch(updatedSuspendedZones(data.data.controller.zones))
    }
  }

  return (
    <div style={{ 
      width: '400px', 
      height: '600px', 
    }}>
      <ListView data={zoneData} />
    </div>
  )
}

export default App;
