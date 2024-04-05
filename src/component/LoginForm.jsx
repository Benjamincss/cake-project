// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


export default function LoginForm() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue("");
    navigate(`/order/${inputValue}`);
  };

  const handlechange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <FormStyled onSubmit={handleSubmit}>

      <h1>Bienvenue chez nous !</h1>
      <hr />
      <h2>Connectez-vous</h2>
      <input value={inputValue} onChange={handlechange} placeholder={"Entrez votre prénom"} required />

      <button>Mon espace</button>
    </FormStyled>
  );
}

const FormStyled = styled.form`
  
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 4rem;
    font-family: Pacifico, cursive;
    font-weight: 400;
    color: white;
    
    
  }
  h2 {
    font-size: 3rem;
    color: white;
    font-family: Pacifico, cursive;
    font-weight: 400;
  }
  input {
    margin: 1rem;
    padding: 1rem;
    font-size: 1rem;
    border-radius: 5px;
    border: none;
    border: 1px solid #ccc;
    width: 100%;
    place-items: center;
    place-content: center;
    
  }
  hr { 
    width: 100%;
    border: 2px solid #63A5AB;
  }
  
  button {
    margin: 1rem;
    padding: 1rem;
    font-size: 1rem;
    font-weight: 700;
    border-radius: 5px;
    width: 100%;
    background-color: #63A5AB;
    cursor: pointer;
    border: none;
    color:white;
    text-align: center;
  }
`