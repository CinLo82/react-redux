import { StarOutlined } from '@ant-design/icons';
import { Card} from 'antd';
import { Meta } from 'antd/es/list/Item';

const PokemonCard = () => {
    return (
        <Card 
            title='Ditto'
            cover={<img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/150.png' alt='Ditto'/>}
            extra={<StarOutlined />}
        >
        <Meta description='fire, magic'/>
        </Card>
    )
}

export default PokemonCard