// _app.tsx
import { useEffect } from 'react';
import { AppProps } from 'next/app';
import { useUser } from '@/app/context/user'; // Adjust the import path
// Adjust the import path

const MyApp = ({ Component, pageProps }: AppProps) => {
  const userContext = useUser();

  useEffect(() => {
    
  }, []);

  return <Component {...pageProps} />;
};

export default MyApp;
