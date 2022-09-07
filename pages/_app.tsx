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
      <script
        defer
        src="https://static.cloudflareinsights.com/beacon.min.js"
        data-cf-beacon='{"token": "3a3453ec9a054b6d9e4dd5a64d79c371"}'
      ></script>
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
            <Link href="/blog">
              <a>
                <h1>Blog</h1>
              </a>
            </Link>
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
