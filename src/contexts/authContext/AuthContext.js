import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return { ...state, isUserLoggedIn: true, token: action.payload }
        case "LOGOUT":
            return { ...state, isUserLoggedIn: false, token: null }
        default:
            return state
    }
};

export const AuthProvider = ({ children }) => {
  let {isUserLoggedIn, token} = JSON.parse(localStorage.getItem('login') ) || { isUserLoggedIn:false,token : null}
 
  const [auth, authDispatch] = useReducer(reducer, {isUserLoggedIn , token});

  return (
    <AuthContext.Provider value={{ auth, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
