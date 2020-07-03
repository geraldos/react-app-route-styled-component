import React from "react";

import styled from "styled-components";

const H1 = styled.h1`
  text-align: center;
  font-family: "Quicksand", sans-serif;
`;

function NotMatch() {
  return (
    <div>
      <H1>404 Not Found</H1>
    </div>
  );
}

export default NotMatch;
