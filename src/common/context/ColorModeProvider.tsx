import React, { createContext, useContext, useEffect } from "react";
import { useColorMode } from "../hooks/useColorMode";

interface ColorModeContextType {
  colorMode: string;
  setColorMode: (colorMode: string) => void;
}

export const ColorModeContext = createContext<ColorModeContextType>({
  colorMode: "light",
  setColorMode: () => {},
});

interface ColorModeProviderProps {
  children: React.ReactNode;
}

export const ColorModeProvider = ({ children }: ColorModeProviderProps) => {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <ColorModeContext.Provider value={{ colorMode, setColorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
};

export const useColorModeContext = () => {
  const { colorMode, setColorMode } = useContext(ColorModeContext);

  return { colorMode, setColorMode };
};
