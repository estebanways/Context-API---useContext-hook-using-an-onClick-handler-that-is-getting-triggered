import './App.css';
import React, { useState } from "react";
import Auth from "./components/Auth";
import AuthContext from "./components/auth.context";

/*
 * Context provides a way to pass data or state
 * through the component tree without having to
 * pass props down manually through each nested
 * component
 */

/*
 * Uses the state to dynamicallly pass the values
 * to the context
 */
const App = () => {
 
  const [authStatus, setAuthStatus] = useState(false);
  const login = () => {
    setAuthStatus(true);
  };

  return (
    <React.Fragment>
      <AuthContext.Provider value={{ status: authStatus, login: login }}>
        <Auth />
      </AuthContext.Provider>
    </React.Fragment>
  );
};

export default App;