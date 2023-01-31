import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import "./App.scss";
import { RespNavbar } from "./Components/Navbar";
import { Welcome } from "./Components/Welcome";
import { About } from "./Components/About";
import { Portfolio } from "./Components/Portfolio";
import { Contact } from "./Components/Contact";
import { Footer } from "./Components/Footer";

export default function App() {
  return (
    <>
      <Styles.Wrapper>
        {/* <CSSReset /> */}
        <RespNavbar />
        <Welcome />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </Styles.Wrapper>
    </>
  );
}

const Styles = {
  Wrapper: styled.main`
  `,
};

