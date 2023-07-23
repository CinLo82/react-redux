import { Button } from "antd"
import { StarFilled, StarOutlined } from '@ant-design/icons'
import PropTypes from 'prop-types'


export const StarButton = ({ isFavorite, onClick }) => {
    StarButton.propTypes = {
        isFavorite: PropTypes.node.isRequired,
        onClick: PropTypes.node.isRequired,

    }
    const Icon = isFavorite ? <StarFilled /> : <StarOutlined />
    return <Button icon={Icon} onClick={onClick}/>
}