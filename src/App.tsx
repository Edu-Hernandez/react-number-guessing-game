import React from "react";
import GuessNumber from "./components/GuessNumber";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <GuessNumber />
    </Container>
  );
};

export default App;
