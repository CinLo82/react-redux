import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux'
import { logger} from './middlewares';
import thunk from 'redux-thunk'
import App from './App.jsx'
import rootReducer from './reducers/rootReducer.js'

const composeAlt = compose

const composedEnhancers = composeAlt(
  applyMiddleware(thunk, logger),
)

const store = createStore(rootReducer, composedEnhancers)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
