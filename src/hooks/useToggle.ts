import { useState, useCallback } from 'react';

/**
 * Hook to toggle a boolean state
 * @param initialState - Initial state value
 * @returns [state, toggle function]
 */
export const useToggle = (initialState = false): [boolean, () => void] => {
  const [state, setState] = useState(initialState);
  
  const toggle = useCallback(() => {
    setState(prevState => !prevState);
  }, []);
  
  return [state, toggle];
};