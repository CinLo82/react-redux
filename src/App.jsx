import Searcher from './componentes/Search'
import { Col } from "antd";
import PokemonList from './componentes/PokemonList';
import logo from './statics/logo.svg'
import './App.css'
function App() {

	return (
		<div className='App'>
			<Col span={4} offset={10}>
				<img src={logo} alt='Pokedux' />
			</Col>
			<Col span={8} offset={8}>
				<Searcher />
			</Col>
			<PokemonList />
		</div>
	)
}

export default App
