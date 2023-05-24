import React from 'react'
import { createContext } from 'react'

export const UserContext = createContext()


export const UserStorage = ({children}) => {
  return (
    <UserContext.Provider value={{usuario: "João"}}>   
      {children}
    </UserContext.Provider>
  )
}

export default UserStorage;
