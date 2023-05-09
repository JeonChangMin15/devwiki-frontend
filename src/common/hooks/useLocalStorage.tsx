import { useState, useEffect } from "react";

type LocalStorageHook<T> = [T | undefined, (data: T) => void];

export const useLocalStorage = <T,>(
  key: string,
  initialValue?: T
): LocalStorageHook<T> => {
  const [state, setState] = useState<T | undefined>(() => {
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialValue;
    } catch (error) {
      // console.error(`Error getting item from localStorage: ${error}`);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      if (state === undefined) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, JSON.stringify(state));
      }
    } catch (error) {
      // console.error(`Error setting item in localStorage: ${error}`);
    }
  }, [key, state]);

  return [state, setState];
};
