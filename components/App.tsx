import * as React from "react";
import styled from "styled-components";

import Button from "./Button";

const RedButton = styled(Button)`
  background-color: red;
`;

const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  & > ${Button} {
    margin-bottom: 30px;
  }
`;

const App = () => {
  return (
    <WrapperDiv>
      <Button>Primary Button!</Button>
      <Button secondary>Secondary Button!</Button>
      <Button rotateForNoReason>Whee!</Button>
      <Button fontSize="50px">Big Button!</Button>
      <RedButton>Overriden to be RED!</RedButton>
    </WrapperDiv>
  );
};

export default App;
