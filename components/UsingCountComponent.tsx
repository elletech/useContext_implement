import React, { useContext } from 'react';
import { CountContext } from '../contexts/counter';

const UsingCountComponent: React.VFC = () => {
  console.log('UsingCountComponent.tsxがmountされました。');
  const ctx = useContext(CountContext);
  return (
    <>
      <h1>UsingCountComponent</h1>
      <p>count: {ctx.count}</p>
    </>
  );
};

export default UsingCountComponent;
