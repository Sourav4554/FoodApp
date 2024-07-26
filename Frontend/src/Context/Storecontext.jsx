import React, { createContext } from 'react'
import { food_list } from '../assets/assets'
export const storeContext=createContext(null)
const StorecontextProvider = (props) => {
  const contextValue={
  food_list
  }
  return (
    <storeContext.Provider value={contextValue}>
      {props.children}
    </storeContext.Provider>
  )
}

export default StorecontextProvider