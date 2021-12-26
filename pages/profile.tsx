import React, { useContext, useEffect } from 'react';
import Link from 'next/link';
import { CountContext } from '../contexts/counter';

const Profile: React.VFC = () => {
  console.log('profile.tsxがmountされました。');
  const ctx = useContext(CountContext);
  const increment = () => ctx.setCountNum(ctx.count + 1);
  const decrement = () => ctx.setCountNum(ctx.count - 1);

  return (
    <>
      <h1>My Profile</h1>
      <p>count: {ctx.count}</p>
      <button onClick={increment}>count increment</button>
      <button onClick={decrement}>count decrement</button>
      <Link href="/">
        <a>Home</a>
      </Link>
    </>
  );
};

export default Profile;
