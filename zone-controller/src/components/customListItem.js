import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { ListItem, Divider } from '@mui/material'

import * as Constants from '../utils/constants'
import SizedIcon from './sizedIcon'
import store from '../services/store'
import { setActive } from '../services/zoneSlice'

const propTypes = {
    id: PropTypes.number,
    value: PropTypes.string,
    icon: PropTypes.string,
    enabled: PropTypes.bool,
    active: PropTypes.bool
}

const defaultProps = {
    id: 0,
    value: '',
    icon: '',
    enabled: false,
    active: false
}

function CustomListItem(props) {
    const isActive = useSelector(state => state.zoneSlice.zones).find(item => item.id === props.id).status.running

    const activateZone = (value) => {
        store.dispatch(setActive({ 
            id: props.id, 
            active: value && props.enabled 
        }))
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <ListItem 
                style={{
                    justifyContent: 'space-between',
                    fontFamily: 'helvetica'
                }}
                disabled={!props.enabled}>
                    <SizedIcon
                        image={props.icon ? `${Constants.ICON_URL}${props.icon}` : Constants.DEFAULT_ICON}
                        onClick={() => activateZone(!isActive)}
                    />
                    <div data-testid="div">{props.value}</div>
                    {isActive ?
                        <SizedIcon image={Constants.ACTIVE_ICON_URL} />
                        : <SizedIcon />
                    }
            </ListItem>
            <Divider light style={{ width: '70%' }} />
        </div>
    )
}

CustomListItem.propTypes = propTypes
CustomListItem.defaultProps = defaultProps

export default CustomListItem