import type { NextPage } from 'next';
import UnusingCountComponent from '../components/UnusingCountComponent';
import UsingCountComponent from '../components/UsingCountComponent';
import { useThemeValue, useThemeSetValue } from '../contexts/theme';

const Home: NextPage = () => {
  console.log('index.tsxがmountされました。');
  const theme = useThemeValue();
  const setTheme = useThemeSetValue();
  const setNaturalTheme = () =>
    setTheme({ foreground: 'black', background: 'white' });
  return (
    <>
      <p>color: {theme.background}</p>
      <button onClick={setNaturalTheme}>changeTheme</button>
      <UsingCountComponent />
      <UnusingCountComponent />
    </>
  );
};

export default Home;
