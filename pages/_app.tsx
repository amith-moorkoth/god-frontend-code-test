import "../public/css/styles.css";
import React from "react";
import Layout from "src/layout/layout1";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <Component {...pageProps} />
    </Layout>
  );
}
