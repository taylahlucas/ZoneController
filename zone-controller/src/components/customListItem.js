import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { ListItem, Divider } from '@mui/material'
import * as Constants from '../data/constants'
import SizedIcon from './sizedIcon'

const propTypes = {
    value: PropTypes.string,
    icon: PropTypes.string,
    enabled: PropTypes.bool,
    active: PropTypes.bool
}

function CustomListItem(props) {
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        setIsActive(props.active && props.enabled)
    }, [props.enabled])

    const activateZone = (value) => {
        setIsActive(value && props.enabled)
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
                disabled={!props.enabled} >
                    <div>
                        <SizedIcon
                            image={props.icon ? `${Constants.ICON_URL}${props.icon}` : Constants.DEFAULT_ICON}
                            onClick={() => activateZone(!isActive)}
                        />
                    </div>
                    <div>{props.value}</div>
                    <div>
                        {isActive ?
                            <SizedIcon image={Constants.ACTIVE_ICON_URL} />
                            : <SizedIcon />
                        }
                    </div>
            </ListItem>
            <Divider light style={{ width: '70%' }} />
        </div>
    )
}

CustomListItem.propTypes = propTypes

export default CustomListItem