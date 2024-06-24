import { Dispatch, SetStateAction, useCallback, useState } from "react";

export function getStorageValue<T>(key: string, defaultValue: T): T {
  const saved = localStorage.getItem(key);
  return saved ? JSON.parse(saved) : defaultValue;
}

export function setStorageValue<T>(key: string, value: T) {
  localStorage.setItem(key, JSON.stringify(value));
}

export type UseLocalStorageResponse<T> = [T, Dispatch<SetStateAction<T>>];

export function useLocalStorage<T>(
  key: string,
  defaultValue: T
): UseLocalStorageResponse<T> {
  const [storedValue, setStoredValue] = useState(() =>
    getStorageValue(key, defaultValue)
  );

  const setValue: Dispatch<SetStateAction<T>> = useCallback(
    (value) => {
      if (typeof value === "function") {
        return setStoredValue((state) => {
          setStorageValue<T>(key, (value as any)(state));
          return (value as any)(state);
        });
      }

      setStorageValue<T>(key, value);
      setStoredValue(value);
    },
    [key]
  );

  return [storedValue, setValue];
}
