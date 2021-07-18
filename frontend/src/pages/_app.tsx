import { AppProps } from 'next/app';

import '../styles/main.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />; // eslint-disable-line react/jsx-props-no-spreading
};

export default MyApp;
