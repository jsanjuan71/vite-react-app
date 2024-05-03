import { useEffect, useState } from 'react'

function useLocalStorage(key, initialValue = []) {
  const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key)
        return item ? JSON.parse(item) : initialValue
  });

  const save = value => {
    setStoredValue(value)
  };

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(storedValue))
  }, [storedValue])

  return [storedValue, save]
}

export default useLocalStorage