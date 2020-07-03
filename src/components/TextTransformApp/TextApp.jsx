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

function TextTransform() {
  const [data, setData] = useState({ text: "", result: "" });

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const split = data.text.split("");
    const result = split
      .map((item) => {
        if (item.match(/[A-Z]/)) {
          item = item.toLowerCase();
        } else {
          item = item.toUpperCase();
        }

        return item;
      })
      .join("");

    setData({
      ...data,
      result: result,
    });
  };

  return (
    <div>
      <H1>Text Transform Apps</H1>

      <form onKeyUp={handleSubmit}>
        <Div>
          <Input
            placeholder="Text..."
            type="text"
            name="text"
            onChange={handleChange}
            value={data.text}
          ></Input>
        </Div>

        <Div>
          <Button type="submit">Calculate</Button>
        </Div>

        <Div>
          <p>
            Transform text {data.text} is {data.result}
          </p>
        </Div>
      </form>
    </div>
  );
}

export default TextTransform;
