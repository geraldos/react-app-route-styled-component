import React, { useState } from "react";

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
  const [result, setResult] = useState(0);
  const [age, setAge] = useState(0);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const calculate = () => {
    if (age == 1) {
      setResult(15);
    } else if (age == 2) {
      setResult(24);
    } else if (age >= 3) {
      setResult(24 + (age - 2) * 4);
    }
  };
  return (
    <div>
      <H1>Cat Age conversion</H1>

      <Div>
        <Input
          type="number"
          name="age"
          placeholder="Umur Kucing ...."
          onChange={handleChange}
        ></Input>
      </Div>

      <Div>
        <Button type="submit" onClick={calculate}>
          Calculate
        </Button>
      </Div>

      <Div>
        <p>Umur Manusia = {result}</p>
      </Div>
    </div>
  );
}

export default CatAgeConversion;
