import "../styles/globals.css";
import type { AppProps } from "next/app";
import CounterStoreProvider from "../stores/CounterStoreProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CounterStoreProvider>
      <Component {...pageProps} />
    </CounterStoreProvider>
  );
}

export default MyApp;
