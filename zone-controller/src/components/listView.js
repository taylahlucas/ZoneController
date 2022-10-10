import PropTypes from 'prop-types'
import List from '@mui/material/List'
import CustomListItem from './customListItem'

const propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            icon: PropTypes.shape({
                id: PropTypes.number.isRequired,
                fileName: PropTypes.string,
                customImage: PropTypes.string
            }),
            suspended: PropTypes.bool.isRequired,
            status: PropTypes.shape({
                running: PropTypes.bool.isRequired
            }).isRequired
        })
    )
}

function ListView(props) {
    return (
        <List>
            {props.items ? 
                props.items.map(item => {           
                    return <CustomListItem 
                        key={item.id.toString()}
                        value={item.name}
                        icon={item.icon.customImage ?? item.icon.fileName}
                        enabled={!item.suspended}
                        active={item.status.running}
                    />
                })
                : <div>Loading zones</div>
            }
        </List>
    )
}

ListView.propTypes = propTypes

export default ListView