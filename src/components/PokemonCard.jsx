import { StarOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import { Meta } from 'antd/es/list/Item';
import PropTypes from 'prop-types'


const PokemonCard = ({ name, image, abilities }) => {
	PokemonCard.propTypes = {
		name: PropTypes.node.isRequired,
		image: PropTypes.node.isRequired,
		abilities: PropTypes.node.isRequired,

	}

	return (
		<Card
			title={name}
			cover={
				<img
				src={image}
				alt={name}
				/>
			}
			extra={<StarOutlined />}
		>
		<Meta description={
			<ul>
                {abilities.map(ability => 
					<li key={ability.ability.name} 
				>
				{ability.ability.name}
					</li>
				)}
            </ul>}  
		/>
		</Card>
	);
};

export default PokemonCard;