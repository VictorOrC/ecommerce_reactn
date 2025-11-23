import { useState, useEffect, createContext } from "react";
import { storageCrtl } from "../api";

export const AuthContext = createContext();

export function AuthProvider(props) {
  const { children } = props;
  useEffect(() => {
    recoverySession();
  }, []);

  const recoverySession = async () => {
    const token = await storageCrtl.getToken();
    console.log("TOKEN --->", token);
  };

  const login = async (token) => {
    try {
      await storageCrtl.setToken(token);
    } catch (error) {
      console.log(error);
    }
  };

  const data = {
    user: null,
    login,
    logout: () => console.log("LOGOUT"),
    updateUser: () => console.log("UPDATE_USER"),
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}
