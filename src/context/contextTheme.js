import { createContext } from "react";

const ctx = {
  theme: "",
  setTheme: () => {},
};

export const ContexTheme = createContext(ctx);
