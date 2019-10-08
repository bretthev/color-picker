import React, { useState } from "react";
import App from "next/app";
import Header from "../components/Header";
import { ColorType } from "../helpers/types";

export interface ColorPageProps {
  updateHeaderColors: (colors: ColorType[]) => void;
}

class MyApp extends App {
  state = {
    selectedColors: []
  };

  setColors = (selectedColors: ColorType[]) => {
    this.setState({ selectedColors });
  };

  render() {
    const { Component, pageProps } = this.props;
    const { selectedColors } = this.state;
    return (
      <>
        <Header colors={selectedColors.length} />
        <Component {...pageProps} updateHeaderColors={this.setColors} />
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
