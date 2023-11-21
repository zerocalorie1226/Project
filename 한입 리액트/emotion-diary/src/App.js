import "./App.css";
import MyHeader from "./MyHeader";
import React from "react";
import Counter from "./Counter";
import Container from "./Container";

function App() {
  const counterProps = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    initialValue: 0,
  };
  return (
    <Container>
      <div>
        <MyHeader />
        <Counter {...counterProps} />
      </div>
    </Container>
  );
}

export default App;
