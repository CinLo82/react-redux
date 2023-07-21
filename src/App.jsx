import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col } from 'antd';
import { getPokemonsWithDetails, setPokemons } from './actions';
import Searcher from './components/Search';
import PokemonList from './components/PokemonList';
import { getPokemon, getPokemonAbilities } from './api/index';
import logo from './statics/logo.svg';
import './App.css';


function App() {
	
	const pokemons = useSelector(state => state.pokemons)
	const dispatch = useDispatch()

	useEffect(() => {
		const fetchPokemons = async () => {
			const pokemonsRes = await getPokemon();
		
			const pokemonsAbilities = await Promise.all(pokemonsRes.map(pokemon => getPokemonAbilities(pokemon)))
		dispatch(setPokemons(pokemonsRes))
		dispatch(getPokemonsWithDetails(pokemonsRes))
		dispatch(setPokemons(pokemonsAbilities))

		};

    fetchPokemons();
	}, []);

	return (
		<div className='App'>
			<Col span={4} offset={10}>
			<img src={logo} alt='Pokedux' />
			</Col>
			<Col span={8} offset={8}>
			<Searcher />
			</Col>
			<PokemonList pokemons={pokemons} />
		</div>
	);
}

export default App;