import React from "react";
import App from "next/app";
import Header from "../components/Header";

class MyApp extends App {
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //   return { ...appProps }
  // }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Header />
        <Component {...pageProps} />;
        <style jsx global>
          {`
            body {
              margin: 0;
            }
          `}
        </style>
      </>
    );
  }
}

export default MyApp;
