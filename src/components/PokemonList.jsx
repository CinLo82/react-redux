import PokemonCard from './PokemonCard';
import PropTypes from 'prop-types'
import './PokemonList.css'

const PokemonList = ({ pokemons }) => {
    PokemonList.propTypes = {
        pokemons: PropTypes.node.isRequired,
    }
	return (
	<div className='PokemonList'>
		{pokemons.map((pokemon) => {
			return	<PokemonCard 
						name={pokemon.name} 
						key={pokemon.name} 
						image={pokemon.sprites.front_default}
						abilities={pokemon.abilities}
					/>
		})}
	</div>
	)
}

PokemonList.defaultProps = {
	pokemons: Array(10).fill(''),
}

export default PokemonList