import React from "react";
import styled from "styled-components";

export const MyLogo = () => {
  return (
    <>
      <Logo.Wrapper>
        <Logo.First>Arthur</Logo.First>
        <Logo.Middle>John</Logo.Middle>
        <Logo.Last>Hauser</Logo.Last>
      </Logo.Wrapper>
    </>
  );
};

const Logo = {
  Wrapper: styled.div`
    flex: 1;
    display: grid;
    grid-template-columns: 1fr 1fr auto;
    grid-template-rows: 1fr 1fr;
    background-color: transparent;
    border: 1px solid red;
  `,
  First: styled.h1`
    margin: 0;
    padding: 0;
    font-size: 1rem;
    grid-column: 1 / 2;
    grid-row: 1;
  `,
  Middle: styled.h1`
    margin: 0;
    padding: 0;
    font-size: 1rem;
    grid-column: 2 / 3;
    grid-row: 1;
  `,
  Last: styled.h1`
    margin: 0;
    padding: 0;
    font-size: 1rem;
    grid-column: 1 / 3;
    grid-row: 2;  `,
};
