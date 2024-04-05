import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Leftnavbar from './leftnavbar.jsx';
import Rightnavbar from './rightnavbar.jsx';

export default function Navbar({ username }) {
  return (
    <NavStyled>
      <div className="navbar">
        <Leftnavbar></Leftnavbar>
        <Rightnavbar username={username}></Rightnavbar>
      </div>
    </NavStyled>
  );
}

const NavStyled = styled.nav`
  display: flex;
  flex-direction: column;
  backdrop-filter: box-shadow(0 0 0 0.5rem rgba(0, 0, 0, 0.5));
  justify-content: space-between;
  background-color: #f1f1f1;
  padding: 1rem;
  margin-bottom: 1rem;
  h1 {
    font-size: 1.5rem;
    color: #333;
  }
  button {
    padding: 0.5rem 1rem;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;