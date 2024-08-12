import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";

const GuessNumber = () => {
  const [targetNumber, setTargetNumber] = useState(generateRandomNumber());
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [attempts, setAttempts] = useState(0);

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  const handleGuessChange = (e) => {
    setGuess(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const numericGuess = Number(guess);
    if (isNaN(numericGuess) || numericGuess < 1 || numericGuess > 100) {
      setMessage("Por favor, ingresa un número entre 1 y 100.");
      return;
    }
    setAttempts(attempts + 1);
    if (numericGuess === targetNumber) {
      setMessage(
        `¡Felicidades! Adivinaste el número en ${attempts + 1} intentos.`
      );
    } else if (numericGuess < targetNumber) {
      setMessage("¡Demasiado bajo! Inténtalo de nuevo.");
    } else {
      setMessage("¡Demasiado alto! Inténtalo de nuevo.");
    }
    setGuess("");
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Adivina el Número</h1>
      <Form onSubmit={handleSubmit} className="text-center">
        <Form.Group controlId="formGuessNumber">
          <Form.Label>Ingresa un número entre 1 y 100</Form.Label>
          <Form.Control
            type="number"
            placeholder="Introduce tu suposición"
            value={guess}
            onChange={handleGuessChange}
            className="mb-3"
          />
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form.Group>
      </Form>
      {message && (
        <Alert
          variant={message.includes("Felicidades") ? "success" : "danger"}
          className="mt-4 text-center"
        >
          {message}
        </Alert>
      )}
    </Container>
  );
};

export default GuessNumber;
