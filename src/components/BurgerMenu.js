// import React from 'react';
// import styled from 'styled-components';

// const BurgerMenu = ({ open, setOpen }) => {
//   return (
//     <StyledBurger open={open} onClick={() => setOpen(!open)}>
//       <div />
//       <div />
//       <div />
//     </StyledBurger>
//   );
// };

// export default BurgerMenu;

// const StyledBurger = styled.div`
//   width: 2rem;
//   height: 2rem;
//   position: fixed;
//   top: 15px;
//   right: 20px;
//   display: none;
//   z-index: 20;
//   cursor: pointer;

//   @media (max-width: 1000px) {
//     display: flex;
//     justify-content: space-around;
//     flex-direction: row;
//   }

//   div {
//     width: 2rem;
//     height: 0.25rem;
//     background-color: ${({ open }) => (open ? '#ccc' : '#333')};
//     border-radius: 10px;
//     transition: all 0.3s linear;
//     position: relative;
//     transform-origin: 1px;

//     :first-child {
//       transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
//     }

//     :nth-child(2) {
//       opacity: ${({ open }) => (open ? '0' : '1')};
//       transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
//     }

//     :nth-child(3) {
//       transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
//     }
//   }
// `;
import React from 'react';
import styled from 'styled-components';

const BurgerMenu = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default BurgerMenu;

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  display: none;
  z-index: 20;
  cursor: pointer;

  @media (max-width: 1000px) {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? '#ccc' : '#333')};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
