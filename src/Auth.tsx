import { User } from "firebase";
import React, { createContext, useEffect, useState } from "react";

import auth from "./firebase";

interface IAuthContext {
  currentUser: User | null | undefined;
}

const AuthContext = createContext<IAuthContext>({ currentUser: undefined });

const AuthProvider = (props: any) => {
  const [currentUser, setCurrentUser] = useState<User | null | undefined>(
    undefined
  );

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser: currentUser
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
