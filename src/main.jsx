import React from 'react'
import ReactDOM from 'react-dom/client'
import { pokemonsReducer } from './reducers/pokemons.js'
import { Provider } from 'react-redux'
import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux'
import { logger} from './middlewares';
import thunk from 'redux-thunk'
import App from './App.jsx'

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose

const composedEnhancers = composeAlt(
  applyMiddleware(thunk, logger),
)

const store = createStore(pokemonsReducer, composedEnhancers)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
