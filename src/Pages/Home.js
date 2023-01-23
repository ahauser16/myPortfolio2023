import styled from "styled-components";

export default function Home() {
  //BELOW IS ALL LOGO CODE
  const LogoContainer = styled.div`
    padding: 0;
    margin: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: azure;
  `;

  const FigmaLogo = styled.div`
    width: 200px;
    display: flex;
    flex-wrap: wrap;
  `;

  const ElementLeft = styled.div`
    width: 100px;
    height: 100px;
    background: red;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
  `;

  const ElementRightOrange = styled.div`
    width: 100px;
    height: 100px;
    background: red;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    background: #fb7266;
  `;

  const ElementLeftPurple = styled.div`
    width: 100px;
    height: 100px;
    background: red;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    background: #a061fa;
  `;

  const ElementCircleBlue = styled.div`
    width: 100px;
    height: 100px;
    background: red;
    border-radius: 50px;
    border-radius: 50px;
    background: #2ebdfa;
  `;

  const ElementLeftClipGreen = styled.div`
    width: 100px;
    height: 100px;
    background: red;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    background: #00ce84;
  `;

  //ABOVE IS ALL LOGO CODE

  return (
    <>
      <div>You are in Home page</div>;
      <LogoContainer>
        <FigmaLogo>
          <ElementLeft></ElementLeft>
          <ElementRightOrange></ElementRightOrange>
          <ElementLeftPurple></ElementLeftPurple>
          <ElementCircleBlue></ElementCircleBlue>
          <ElementLeftClipGreen></ElementLeftClipGreen>
        </FigmaLogo>
      </LogoContainer>
    </>
  );
}
