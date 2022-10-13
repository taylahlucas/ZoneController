import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import ListView from './components/listView'
import data from './data/data.json'
import store from './services/store'
import { addZones } from './services/zoneSlice'

function App() {
  const zoneData = useSelector(state => state.zoneSlice.zones)

  useEffect(() => {
    getZones()
  }, [])

  function getZones() {
    store.dispatch(addZones(data.data.controller.zones))
  }

  return (
    <ListView data={zoneData} />
  )
}

export default App;
