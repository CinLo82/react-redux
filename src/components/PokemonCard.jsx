import { StarOutlined } from '@ant-design/icons';
import { Card} from 'antd';
import { Meta } from 'antd/es/list/Item';
import PropTypes from 'prop-types'


const PokemonCard = ({ name }) => {
    PokemonCard.propTypes = {
        name: PropTypes.node.isRequired,
      }
  return (
    <Card
      title={name}
      cover={
        <img
          src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png'
          alt='Ditto'
        />
      }
      extra={<StarOutlined />}
    >
      <Meta description='fire, magic' />
    </Card>
  );
};

export default PokemonCard;