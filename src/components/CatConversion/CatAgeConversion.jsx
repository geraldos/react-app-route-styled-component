import React from "react";

import styled from "styled-components";

const Div = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`;

const H1 = styled.h1`
  text-align: center;
  font-family: "Quicksand", sans-serif;
`;

const Input = styled.input`
  width: 250px;
  padding: 12px 20px;
  border: 1px solid #ccc;
  box-sizing: border-box;
`;

const Button = styled.button`
  background-color: cadetblue;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`;

function CatAgeConversion() {
  return (
    <div>
      <H1>Cat Age conversion</H1>

      <Div>
        <Input placeholder="Cat Age.." type="text"></Input>
      </Div>

      <Div>
        <Button type="submit">Calculate</Button>
      </Div>
    </div>
  );
}

export default CatAgeConversion;
