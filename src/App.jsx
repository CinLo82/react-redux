import { useEffect } from 'react';
import { Col } from 'antd';
import { connect } from 'react-redux';
import { setPokemons as setPokemonsActions } from './actions';
import Searcher from './components/Search';
import PokemonList from './components/PokemonList';
import { getPokemon } from './api/index';
import logo from './statics/logo.svg';
import PropTypes from 'prop-types'
import './App.css';

function App({ pokemons, setPokemons}) {
	App.propTypes = {
        pokemons: PropTypes.node.isRequired,
        setPokemons: PropTypes.node.isRequired,
      }

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon();
      setPokemons(pokemonsRes);
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
const mapStateToProps = (state) => ({
	pokemons: state.pokemons
})

const mapDispatchToProps = (dispatch) => ({
	setPokemons: (value) => dispatch(setPokemonsActions(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);