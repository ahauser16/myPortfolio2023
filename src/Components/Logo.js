import React from "react";
import styled from "styled-components";

export const MyLogo = () => {
  return (
    <>
      <Logo.Wrapper>
        <Logo.First>
          <Logo.First_A>a</Logo.First_A>
          <Logo.First_R>r</Logo.First_R>
          <Logo.First_T>t</Logo.First_T>
          <Logo.First_H>h</Logo.First_H>
          <Logo.First_U>u</Logo.First_U>
          <Logo.First_R>r</Logo.First_R>
        </Logo.First>
        <Logo.Middle>
          <Logo.Middle_J>j</Logo.Middle_J>
          <Logo.Middle_O>o</Logo.Middle_O>
          <Logo.Middle_H>h</Logo.Middle_H>
          <Logo.Middle_N>n</Logo.Middle_N>
        </Logo.Middle>
        <Logo.Last>
          <Logo.Last_H>h</Logo.Last_H>
          <Logo.Last_A>a</Logo.Last_A>
          <Logo.Last_U>u</Logo.Last_U>
          <Logo.Last_S>s</Logo.Last_S>
          <Logo.Last_E>e</Logo.Last_E>
          <Logo.Last_R>r</Logo.Last_R>
        </Logo.Last>
      </Logo.Wrapper>
    </>
  );
};

const Logo = {
  Wrapper: styled.div`
    flex: 1;
    display: grid;
    grid-template-columns: fit-content(6ch) fit-content(4ch) auto;
    grid-template-rows: 1fr fit-content(6ch);
    background-color: transparent;
    border: 1px solid red;
    gap: 0 .75rem;
  `,
  First: styled.h1`
    margin: 0;
    padding: 0;
    font-size: 2rem;
    grid-column: 1 / 2;
    grid-row: 1;
    display: flex;
    justify-content: space-evenly;
  `,
  First_A: styled.span`
    color: blue;
  `,
  First_R: styled.span`
    color: green;
  `,
  First_T: styled.span`
    color: red;
  `,
  First_H: styled.span`
    color: pink;
  `,
  First_U: styled.span`
    color: cyan;
  `,
  First_R: styled.span`
    color: yellow;
  `,
  Middle: styled.h1`
    margin: 0;
    padding: 0;
    font-size: 2rem;
    grid-column: 2 / 3;
    grid-row: 1;
    display: flex;
    justify-content: space-evenly;
  `,
  Middle_J: styled.span`
    color: blue;
  `,
  Middle_O: styled.span`
    color: green;
  `,
  Middle_H: styled.span`
    color: red;
  `,
  Middle_N: styled.span`
    color: pink;
  `,
  Last: styled.h1`
    margin: 0;
    padding: 0;
    font-size: 2rem;
    grid-column: 1 / 3;
    grid-row: 2;
    display: flex;
    justify-content: space-evenly;
  `,
  Last_H: styled.span`
    color: blue;
  `,
  Last_A: styled.span`
    color: green;
  `,
  Last_U: styled.span`
    color: red;
  `,
  Last_S: styled.span`
    color: pink;
  `,
  Last_E: styled.span`
    color: cyan;
  `,
  Last_R: styled.span`
    color: yellow;
  `,
  GhostElement: styled.h1`
    margin: 0;
    padding: 0;
    font-size: 2rem;
    grid-column: 2 / 4;
    grid-row: 2;
  `,
};
