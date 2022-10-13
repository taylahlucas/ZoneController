import { Provider } from 'react-redux'
import { unmountComponentAtNode } from 'react-dom'

import store from '../services/store'
import { addZones, setActive } from '../services/zoneSlice'
import CustomListItem from '../components/customListItem'
import * as Constants from '../utils/constants'
import TestRenderer from 'react-test-renderer'
import SizedIcon from '../components/sizedIcon'

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
                "running": false
            }
        },
        {
            "id": 13,
            "name": "Zone 1",
            "icon": {
                "id": 1,
                "fileName": "leaf.png",
                "customImage": "test.png"
            },
            "suspended": false,
            "status": {
                "running": true
            }
        }
    ]
}

describe('CustomListItem tests', () => {
    const zone = data.zones[0]
    let container = null
    beforeEach(() => {
        store.dispatch(addZones(data.zones))
        container = document.createElement("div")

        document.body.appendChild(container)
    });
    
    afterEach(() => {
        unmountComponentAtNode(container)
        container.remove()
        container = null
    })

    it("renders the default image when no image for a zone is given", () => {
        const testRenderer = TestRenderer.create(
            <Provider store={store}>
                <CustomListItem 
                    key={zone.id.toString()}
                    id={zone.id}
                    value={zone.name}
                    icon={null}
                    enabled={!zone.suspended}
                    active={zone.status.running}
                />
            </Provider>
        )
        const testInstance = testRenderer.root
        expect(testInstance.findAllByType(SizedIcon)[0].props.image).toBe(Constants.DEFAULT_ICON)
    })

    it("renders with filename image from the zone data", () => {
        const testRenderer = TestRenderer.create(
            <Provider store={store}>
                <CustomListItem 
                    key={zone.id.toString()}
                    id={zone.id}
                    value={zone.name}
                    icon={zone.icon.fileName}
                    enabled={!zone.suspended}
                    active={zone.status.running}
                />
            </Provider>
        )
        const testInstance = testRenderer.root
        expect(testInstance.findAllByType(SizedIcon)[0].props.image).toBe(Constants.ICON_URL + zone.icon.fileName)
    })

    it("renders with custom image from the zone data", () => {
        const zone = data.zones[1]
        const testRenderer = TestRenderer.create(
            <Provider store={store}>
                <CustomListItem 
                    key={zone.id.toString()}
                    id={zone.id}
                    value={zone.name}
                    icon={zone.icon.fileName}
                    enabled={!zone.suspended}
                    active={zone.status.running}
                />
            </Provider>
        )
        const testInstance = testRenderer.root
        expect(testInstance.findAllByType(SizedIcon)[0].props.image).toBe(Constants.ICON_URL + zone.icon.fileName)
    })

    it("does not render the active icon not active", () => {
        const testRenderer = TestRenderer.create(
            <Provider store={store}>
                <CustomListItem 
                    key={zone.id.toString()}
                    id={zone.id}
                    value={zone.name}
                    icon={zone.icon.fileName}
                    enabled={!zone.suspended}
                    active={zone.status.running}
                />
            </Provider>
        )
        const testInstance = testRenderer.root
        expect(testInstance.findAllByType(SizedIcon)[1].props.image).toBe(null)
    })

    it("renders the active icon when active", () => {
        const inputData = {
            id: data.zones[1].id,
            active: true
          }
        store.dispatch(setActive(inputData))
        const zone = data.zones[1]
        const testRenderer = TestRenderer.create(
            <Provider store={store}>
                <CustomListItem 
                    key={zone.id.toString()}
                    id={zone.id}
                    value={zone.name}
                    icon={zone.icon.fileName}
                    enabled={!zone.suspended}
                    active={zone.status.running}
                />
            </Provider>
        )
        const testInstance = testRenderer.root
        expect(testInstance.findAllByType(SizedIcon)[1].props.image).toBe(Constants.ACTIVE_ICON_URL)
    })
})