
// import React, { useState } from "react";
// import { HashLink as Link } from 'react-router-hash-link';
// import styled from "styled-components";
// import BurgerMenu from "./BurgerMenu";

// const Header = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <StyledHeader>
//         <Logo src="/assets/nameLogo.png" alt="logo"/>
//       <Nav open={open}>
//         <NavList>
//           <NavItem><StyledLink smooth to="#hero">HOME</StyledLink></NavItem>
//           <NavItem><StyledLink smooth to="#about">ABOUT</StyledLink></NavItem>
//           <NavItem><StyledLink smooth to="#technologies">SKILLS</StyledLink></NavItem>
//           <NavItem><StyledLink smooth to="#projects">PROJECTS</StyledLink></NavItem>
//           <NavItem><StyledLink smooth to="#contact">CONTACT</StyledLink></NavItem>
//         </NavList>
//       </Nav>
//       <BurgerMenu open={open} setOpen={setOpen} />
//     </StyledHeader>
//   );
// };
// export default Header;

// // Styled components
// const StyledHeader = styled.header`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: 100%;
//   padding: 20px;
//   position: fixed;
//   top: 0;
//   background: black;
//   z-index: 1000;

//   @media (max-width: 768px) {
//     padding: 10px 20px;
//   }
// `;

// const Nav = styled.nav`
//   display: flex;
//   justify-content: center;
//   flex-direction: row;

//   @media (max-width: 768px) {
//     flex-direction: column;
//     position: fixed;
//     background: black;
//     top: 0;
//     right: 0;
//     width: 100%;
//     padding-top: 3.5rem;
//     transition: transform 0.3s ease-in-out;
//     transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
//     justify-content: flex-start;
//   }
// `;

// const Logo = styled.img`
//   width: 300px;
//   height: auto;
// `;

// const NavList = styled.ul`
//   list-style: none;
//   display: flex;
//   font-size: 30px;
//   gap: 20px;

//   @media (max-width: 1000px) {
//     flex-direction: column;
//   }
// `;

// const NavItem = styled.li`
//   margin: 0 10px;

//   @media (max-width: 768px) {
//     margin: 0;
//   }

//   &:not(:last-child)::after {
//     content: "|";
//     position: absolute;
//     right: -25px;
//     color: white;
//   }
// `;

// const StyledLink = styled(Link)`
//   text-decoration: none;
//   font-weight: bold;
//   color: white;

//   &:hover {
//     color: #007bff;
//     text-decoration: underline;
//   }

//   @media (max-width: 768px) {
//     font-size: 1.5rem;
//     padding: 20px 0;
//   }
// `;
import React, { useState } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import styled from "styled-components";
import BurgerMenu from "./BurgerMenu";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <StyledHeader>
      <Logo src="/assets/nameLogo.png" alt="logo"/>
      <Nav open={open}>
        <NavList>
          <NavItem><StyledLink smooth to="#hero">HOME</StyledLink></NavItem>
          <NavItem><StyledLink smooth to="#about">ABOUT</StyledLink></NavItem>
          <NavItem><StyledLink smooth to="#technologies">SKILLS</StyledLink></NavItem>
          <NavItem><StyledLink smooth to="#projects">PROJECTS</StyledLink></NavItem>
          <NavItem><StyledLink smooth to="#contact">CONTACT</StyledLink></NavItem>
        </NavList>
      </Nav>
      <BurgerMenu open={open} setOpen={setOpen} />
    </StyledHeader>
  );
};
export default Header;

// Styled components
const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  position: fixed;
  top: 0;
  background: black;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 10px 20px;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    background: black;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

const Logo = styled.img`
  width: 300px;
  height: auto;

  @media (max-width: 768px) {
    width: 120px;
  }
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  font-size: 1.5rem;
  gap: 20px;
  padding: 0;
  margin: 0;

  @media (max-width: 1000px) {
    flex-direction: column;
    width: 100%;
  }
`;

const NavItem = styled.li`
  margin: 0 10px;
  position: relative;

  @media (max-width: 768px) {
    margin: 0;
    width: 100%;
    text-align: center;
    padding: 10px 0;
  }

  &:not(:last-child)::after {
    content: "";
    position: absolute;
    right: -25px;
    color: white;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  color: white;

  &:hover {
    color: #007bff;
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding: 20px 0;
    width: 100%;
  }
`;
