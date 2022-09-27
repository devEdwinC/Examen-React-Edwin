import React, { useState, ReactNode, useEffect } from "react";
import { User } from "../types/types";

const Context = React.createContext({});

interface Props{
    children: ReactNode
}

interface UserState {
  user: User
}

export function UserContextProvider({children}:Props) {
    const [user, setUser] = useState<UserState["user"] | null>({});
    const [loggedIn, setLoggedIn] = useState<boolean>(false);
  
    return (
      <Context.Provider
        value={{
          user,
          setUser,
          loggedIn,
          setLoggedIn,
        }}
      >
        {children}
      </Context.Provider>
    );
}

export default Context;