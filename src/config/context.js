import React, { createContext } from "react";

import persist from "../config/store";
const persistStore = persist();

export const AuthContext = createContext();

class AuthContextProvider extends React.Component{
  state = {
    store: persistStore.store
  }

  render(){
    return(
      <AuthContext.Provider value={{... this.state}}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthContextProvider;