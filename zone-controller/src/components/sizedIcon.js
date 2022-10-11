import PropTypes from 'prop-types'

const propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    image: PropTypes.string,
    onClick: PropTypes.func
}

const defaultProps = {
    width: '28px',
    height: '28px',
    image: null
}

function SizedIcon(props) {
    return (
        <div style={{ width: props.width, height: props.height }}>
            {props.image ?
                <img 
                    style={{ width: props.width, height: props.height }}
                    src={props.image}
                    onClick={props.onClick} />
                : null
            }
        </div>
    )
}

SizedIcon.propTypes = propTypes
SizedIcon.defaultProps = defaultProps

export default SizedIcon
