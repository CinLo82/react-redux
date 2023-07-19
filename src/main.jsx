import React from 'react'
import ReactDOM from 'react-dom/client'
import { pokemonsReducer } from './reducers/pokemons.js'
import { Provider } from 'react-redux'
import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux'
import { featuring, logger, nameUpperCase } from './middlewares';
import App from './App.jsx'



const composedEnhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logger, featuring, nameUpperCase),
)

const store = createStore(pokemonsReducer, composedEnhancers)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
