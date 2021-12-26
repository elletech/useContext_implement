import React from 'react';

const UnusingCountComponent: React.VFC = () => {
  console.log('UnusingCountComponent.tsxがmountされました。');
  return (
    <>
      <h1>UnusingCountComponent</h1>
      <p>このコンポーネントはuseContextを使っていません。</p>
    </>
  );
};

export default UnusingCountComponent;
