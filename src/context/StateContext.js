import React, {useReducer, createContext, useContext} from 'react'
// Create data layer for provider
const StateContext = createContext()

// Wraps around app/component you want datalayer to have access to
export const StateContextProvider = ({reducer, children, initialState}) => (
  <StateContext.Provider value={useReducer(reducer, initialState)} >
    {children}
  </StateContext.Provider>
)
// Allows you to pull data layer in other files
export const useStateValue = () => useContext(StateContext)

