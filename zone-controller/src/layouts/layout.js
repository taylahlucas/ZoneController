import { useEffect, useState } from 'react'
import { useInterval } from '../utils/useInterval'
import ListView from '../components/listView'
import data from '../data/data.json'

export default function Layout() {
    const [zoneData, setZoneData] = useState(null)

    useInterval(() => {
        getItems()
    }, 5000)

    useEffect(() => {
        setZoneData(data.data.controller.zones)
        // TODO: Need to keep global state between polled data and user changed data
    }, [])

    const getItems = () => {
        setZoneData(data.data.controller.zones)
    }

    return (
        <div style={{ 
            width: '400px', 
            height: '600px', 
        }}>
            <ListView items={zoneData} />
        </div>
    )
}