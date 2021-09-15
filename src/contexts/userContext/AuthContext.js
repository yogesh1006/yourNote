import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

const reducer = (state, action) => {
  switch (action) {
    case "LOGIN":
      return {};
    default:
      return state;
  }
};
const initialState = {
  name: "",
  email: "",
  token: "",
};
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
