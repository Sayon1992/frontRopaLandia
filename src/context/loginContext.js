import { useContext, createContext } from "react";

export const LoginContext = createContext(null);

export function ContextLogin() {
  return useContext(LoginContext);
}
