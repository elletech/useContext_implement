import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { CountContext, useCount } from '../contexts/counter';

function MyApp({ Component, pageProps }: AppProps) {
  const ctx = useCount();
  return (
    <CountContext.Provider value={ctx}>
      <Component {...pageProps} />
    </CountContext.Provider>
  );
}

export default MyApp;
