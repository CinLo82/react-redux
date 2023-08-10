import { StarButton } from './StarButton'; 
import { Card } from 'antd'
import { Meta } from 'antd/es/list/Item'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux';
import { setFavorite } from '../slices/dataSlice';
import './PokemonCard.css'


const PokemonCard = ({ name, image, types, id, favorite }) => {
	PokemonCard.propTypes = {
		name: PropTypes.node.isRequired,
		image: PropTypes.node.isRequired,
		types: PropTypes.node.isRequired,
		id: PropTypes.node.isRequired,
		favorite: PropTypes.node.isRequired,
	}

	const dispatch= useDispatch()
	const typesString = types.map((elem) => elem.type.name).join(', ')

	const handleOnFavorite = () => {
		dispatch(setFavorite( { pokemonId : id }))
	}

	return (
		<Card
			className='card'
			title={name}
			cover={
				<img
				src={image}
				alt={name}
				/>
			}
			extra={<StarButton 
				isFavorite={favorite} 
				onClick={handleOnFavorite}
			/>}
		>
		<Meta description={typesString}
		/>
		</Card>
	);
};

export default PokemonCard;