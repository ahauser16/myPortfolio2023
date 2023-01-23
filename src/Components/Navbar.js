import styled from "styled-components";

export default function Navbar() {
    const [extendNavbar, setExtendNavbar] = useState(false);
    
    //BELOW IS ALL NAVBAR CODE
const NavbarContainer = styled.nav`
width: 100%;
height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
background-color: darkblue;
display: flex;
flex-direction: column;

@media (min-width: 700px) {
  height: 80px;
}
`;

const LeftContainer = styled.div`
flex: 70%;
display: flex;
align-items: center;
justify-content: flex-start;
padding-left: 3%;
/* background-color: red; */
`;

const RightContainer = styled.div`
flex: 30%;
display: flex;
align-items: center;
justify-content: flex-end;
padding-right: 50px;
background-color: lightgreen;
`;

const NavbarInnerContainer = styled.div`
width: 100%;
height: 80px;
display: flex;
`;

const NavbarLinkContainer = styled.div`
display: flex;
`;

const NavbarExtendedContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;

@media (min-width: 700px) {
  display: none;
}
`;

const NavbarLink = styled(Link)`
color: white;
font-size: x-large;
font-family: Arial, Helvetica, sans-serif;
text-decoration: none;
margin: 10px;

@media (max-width: 700px) {
  display: none;
}
`;

const NavbarLinkExtended = styled(Link)`
color: white;
font-size: x-large;
font-family: Arial, Helvetica, sans-serif;
text-decoration: none;
margin: 10px;
`;

const OpenLinksButton = styled.button`
width: 70px;
height: 50px;
background: none;
border: none;
color: white;
font-size: 45px;
cursor: pointer;
@media (min-width: 700px) {
  display: none;
}
`;
    
    
    return (
        <>
    <NavbarContainer extendNavbar={extendNavbar}>
        <NavbarInnerContainer>
          <LeftContainer>
            <NavbarLinkContainer>
              <NavbarLink to="/about">About</NavbarLink>
              <NavbarLink to="/experience">Experience</NavbarLink>
              <NavbarLink to="/projects">Projects</NavbarLink>
              <NavbarLink to="/contact">Contact</NavbarLink>
              <NavbarLink to="/resume">Resume</NavbarLink>
              <OpenLinksButton
                onClick={() => {
                  setExtendNavbar((curr) => !curr);
                }}
              >
                {extendNavbar ? <> &#10005; </> : <>&#8801;</>}
              </OpenLinksButton>
            </NavbarLinkContainer>
          </LeftContainer>
          <RightContainer>
            <NavbarLink to="/lightOrDark">LightvDark</NavbarLink>
            <NavbarLink to="/">HomeLogo</NavbarLink>
          </RightContainer>
        </NavbarInnerContainer>
        {extendNavbar && (
          <NavbarExtendedContainer>
            <NavbarLinkExtended to="/" end>
              Home
            </NavbarLinkExtended>
            <NavbarLinkExtended to="/about">About</NavbarLinkExtended>
            <NavbarLinkExtended to="/experience">Experience</NavbarLinkExtended>
            <NavbarLinkExtended to="/projects">Projects</NavbarLinkExtended>
            <NavbarLinkExtended to="/contact">Contact</NavbarLinkExtended>
            <NavbarLinkExtended to="/resume">Resume</NavbarLinkExtended>
          </NavbarExtendedContainer>
        )}
      </NavbarContainer>
      <Outlet />
      </>
    )
}