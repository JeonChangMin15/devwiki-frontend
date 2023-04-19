import React, { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useColorMode = () => {
  const [colorMode, setColorMode] = useLocalStorage<any>("color-mode", "light");

  useEffect(() => {
    const className = "dark";
    const bodyClasses = window.document.body.classList;

    if (colorMode === "dark") {
      bodyClasses.add(className);
    } else {
      bodyClasses.remove(className);
    }
  }, [colorMode]);

  return [colorMode, setColorMode];
};
