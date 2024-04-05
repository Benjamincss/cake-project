
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import styled from 'styled-components';
import Profile from "./Profil.jsx";
import Logo from "./Logo.jsx";

export default function Leftnavbar() {
  return (
    // eslint-disable-next-line react/jsx-no-undef
    <NavStyled>
      <Logo></Logo>

    </NavStyled>
  )
}
export const NavStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f1f1f1;
  padding: 1rem;
  margin-bottom: 1rem;
  h1 {
    font-size: 1.5rem;
 color: #63A5AB;
  }
  button {
    padding: 0.5rem 1rem;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;



