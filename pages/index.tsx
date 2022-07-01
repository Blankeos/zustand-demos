import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import create from "zustand";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Counter App | Zustand Demo</title>
        <meta name="description" content="Zustand Demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>Welcome to Zustand Demos</Layout>
    </div>
  );
};

export default Home;
