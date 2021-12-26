import type { NextPage } from 'next';
import { useContext } from 'react';
import UnusingCountComponent from '../components/UnusingCountComponent';
import UsingCountComponent from '../components/UsingCountComponent';
import { CountContext } from '../contexts/counter';

const Home: NextPage = () => {
  console.log('index.tsxがmountされました。');
  const ctx = useContext(CountContext);
  const increment = () => ctx.setCountNum(ctx.count + 1);
  const decrement = () => ctx.setCountNum(ctx.count - 1);
  return (
    <>
      <p>count:{ctx.count}</p>
      <button onClick={increment}>count increment</button>
      <button onClick={decrement}>count decrement</button>
      <UsingCountComponent />
      <UnusingCountComponent />
    </>
  );
};

export default Home;
