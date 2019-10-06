import React, { useState } from "react";
import App from "next/app";
import Header from "../components/Header";
import { ColorType } from "../helpers/types";

export interface ColorPageProps {
  selectColors: (colors: ColorType[]) => void;
  selectedColors: ColorType[];
}

class MyApp extends App {
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //   return { ...appProps }
  // }
  state = {
    selectedColors: []
  };

  updateSelected = (colors: ColorType[]) => {
    this.setState({ selectedColors: colors });
  };

  render() {
    const { Component, pageProps } = this.props;
    const { selectedColors } = this.state;
    return (
      <>
        <Header selectedColors={selectedColors} />
        <Component
          {...pageProps}
          selectColors={this.updateSelected}
          selectedColors={selectedColors}
        />
        ;
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
