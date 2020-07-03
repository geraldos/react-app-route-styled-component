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

function BMI() {
  const [result, setResult] = useState("");
  const [values, setValues] = useState({
    weight: 0,
    height: 0,
  });

  function calculate() {
    let results = values.weight / (Math.pow(values.height, 2) * 0.0001);

    if (results < 17) {
      setResult("BMI Kamu ialah Kurus, kekurangan berat badan berat");
    } else if (results >= 17 && results <= 18.4) {
      setResult("BMI Kamu ialah Kurus, kekurangan berat badan ringan");
    } else if (results > 18.5 && results <= 25) {
      setResult("BMI Kamu ialah Normal");
    } else if (results > 25 && results <= 27) {
      setResult("BMI Kamu ialah Gemuk, kelebihan berat badan tingkat ringan");
    } else if (results > 27) {
      setResult("BMI Kamu ialah Gemuk, kelebihan berat badan tingkat berat");
    }
  }

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div>
      <H1>BMI Calculator</H1>

      <Div>
        <Input
          placeholder="Height in cm"
          type="text"
          name="height"
          id="height"
          onChange={handleChange}
        ></Input>
      </Div>

      <Div>
        <Input
          placeholder="Weight in kg"
          type="weight"
          name="weight"
          type="text"
          onChange={handleChange}
        ></Input>
      </Div>

      <Div>
        <Button onClick={calculate} type="submit">
          Calculate
        </Button>
      </Div>

      <Div>
        <h2>{result}</h2>
      </Div>
    </div>
  );
}

export default BMI;
