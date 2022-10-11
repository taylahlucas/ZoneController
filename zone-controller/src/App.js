import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import ListView from './components/listView'

import { useInterval } from './utils/useInterval'
import data from './data/data.json'
import store from './services/store'
import { addZones } from './services/zoneSlice'

function App() {
  const zoneData = useSelector(state => state.zoneSlice.zones)

  // Polling the data fetch so we can get the latest from the backend
  // useInterval(() => {
  //     getItems()
  // }, 5000)

  useEffect(() => {
    console.log("GETTING ITEMS")
    getItems()
  }, [])

  function getItems() {
      store.dispatch(addZones(data.data.controller.zones))
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
