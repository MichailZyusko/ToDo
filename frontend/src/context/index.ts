import { createContext } from 'react';
import { TContext } from '../../types';

const nub = () => ({});

export default createContext<TContext>({
  addTask: nub,
  removeTask: nub,
  toggleTask: nub,
});
