import { useState } from "react"
import { UserContext } from "./UserContext"

// const user = {
//     id: 123,
//     name: 'Andy Arellano',
//     email: 'andy@google.com'
// }

// Higher componentes recieve the childrens from other components
export const UserProvider = ({ children }) => {
  
  const [user, setUser] = useState();

  return (
    // value => every children can get it from the father
    <UserContext.Provider value={{ user, setUser }}>
        { children }
    </UserContext.Provider>
  )
}
