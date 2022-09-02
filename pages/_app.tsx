import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Spacer from "../components/Spacer";
import Link from "next/link";
import { AppProps } from "next/app";
import Image from "next/image";
import "../global.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Elijah Potter</title>
      </Head>
      <div className="h-container">
        <Spacer />
        <div className="stage">
          <Navbar>
            <Image src="/profile.svg" width="75" height="100" />
            <Link href="/">
              <a>
                <h1>Elijah Potter</h1>
              </a>
            </Link>
            <Spacer />
          </Navbar>
          <Component {...pageProps} />
        </div>
        <Spacer />
      </div>
    </>
  );
}

//            <Link href="/blog/">
//              <a>
//                <h2>Blog</h2>
//              </a>
//            </Link>
