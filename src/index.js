import React from 'react'
import ReactDOM from 'react-dom'
import { StateContextProvider } from './context/StateContext'
import stateReducer, {initialState} from './reducers/stateReducer'
import App from './App'
import './index.scss'

ReactDOM.render(
  <StateContextProvider reducer={stateReducer} initialState={initialState}>
    <App />
  </StateContextProvider>
  , document.querySelector('#root'))