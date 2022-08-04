import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./AuthReducer";

import { types } from "../types/types";

// const initialState = {
//   logged: false,
// };

const init = () => {
  const userName = JSON.parse(localStorage.getItem('user'));

  return{
    logged: !!userName,
    userName
  }
}

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, /*initialState*/ {}, init);

  const login =( name = '' ) => {
 
    const userName = {id: 'ABC', name}
 
    const action = { type: types.login, payload: userName,}

    localStorage.setItem('user', JSON.stringify(userName));

    dispatch(action);
  }

  const logout = () => {
    localStorage.removeItem('user');
    const action = {type: types.logout, };
    dispatch(action);
  }

  return (
    <AuthContext.Provider value={{...authState, login:login, logout:logout}}>
    {children}
    </AuthContext.Provider>
  )
};
