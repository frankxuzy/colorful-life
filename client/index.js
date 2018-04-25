import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
// can be removed
import ReactDOM from 'react-dom'
import thunkMiddleware from 'redux-thunk'

import reducers from './reducers'
import App from './components/App'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
)

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store} >
      <App />
    </Provider>,  
    document.getElementById('app') 
  )
})
