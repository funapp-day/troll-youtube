import 'normalize.css';

import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { DarkTheme } from '@/configs/theme/dark';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
