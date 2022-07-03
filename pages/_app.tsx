import "../styles/globals.css";
import type { AppProps } from "next/app";
import useStartPersistentStores from "../stores/useStartPersistentStores";

function MyApp({ Component, pageProps }: AppProps) {
  useStartPersistentStores();
  return <Component {...pageProps} />;
}

export default MyApp;
