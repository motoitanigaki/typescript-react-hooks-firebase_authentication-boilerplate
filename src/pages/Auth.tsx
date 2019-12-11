import React, { createContext, useEffect, useState } from "react";
import auth from "../firebase";

const AuthContext = createContext<any>(null);

const AuthProvider = (props: any) => {
  const [currentUser, setCurrentUser] = useState<undefined | null | object>(
    undefined
  );

  //   const signup = useCallback(async (email, password) => {
  //     try {
  //       await auth.createUserWithEmailAndPassword(email, password);
  //     } catch (e) {
  //       console.error(e.code, e.message);
  //     }
  //   }, []);

  //   const signin = useCallback(async (email, password) => {
  //     try {
  //       await auth.signInWithEmailAndPassword(email, password);
  //     } catch (e) {
  //       console.error(e.code, e.message);
  //     }
  //   }, []);

  //   const signout = useCallback(async () => {
  //     try {
  //       await auth.signOut();
  //     } catch (e) {
  //       console.error(e.code, e.message);
  //     }
  //   }, []);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      user ? setCurrentUser(user) : setCurrentUser(null);
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser
        // signup,
        // signin,
        // signout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
