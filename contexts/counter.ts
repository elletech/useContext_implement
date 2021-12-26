import { createContext, useState } from 'react';

type CountContext = {
  count: number;
  setCountNum: (count: number) => void;
};

const defaultContext: CountContext = {
  count: 0,
  setCountNum: () => {},
};

export const CountContext = createContext<CountContext>(defaultContext);

export const useCount = (): CountContext => {
  const [count, setCount] = useState(0);
  const setCountNum = (count: number): void => {
    setCount(count);
  };
  return {
    count,
    setCountNum,
  };
};

