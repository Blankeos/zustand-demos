import "../styles/globals.css";
import type { AppProps } from "next/app";
import useReduxDevTools from "../stores/useReduxDevTools";

function MyApp({ Component, pageProps }: AppProps) {
  // useReduxDevTools();
  return <Component {...pageProps} />;
}

export default MyApp;
