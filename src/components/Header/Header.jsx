import React from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 25px;
`;

// menggunakan props
const NavLink = styled.span`
  padding: 25px;
  font-family: "Quicksand", sans-serif;
`;

const Hr = styled.hr`
  border: 5px solid grey;
  border-radius: 5px;
`;

function Header() {
  return (
    <div>
      <Div>
        <NavLink>
          <Link to="/">BMI Apps</Link>
        </NavLink>
        <NavLink>
          <Link to="/catconversion">Cat Age Conversion</Link>
        </NavLink>
        <NavLink>
          <Link to="/texttransform">Text Transform Apps</Link>
        </NavLink>
      </Div>
      <Hr />
    </div>
  );
}

export default Header;
