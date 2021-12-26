import type { NextPage } from 'next';
import Link from 'next/link';
import { useContext, useEffect } from 'react';
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
      <Link href="/profile">
        <a>Profile</a>
      </Link>
    </>
  );
};

export default Home;
