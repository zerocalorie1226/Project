import "./App.css";
import MyFooter from "./MyFooter";
import MyHeader from "./MyHeader";
import React from "react";

function App() {
  let name = "조성찬";
  const style = {
    App: {
      background: "black",
    },
    h2: {
      color: "red",
    },
    bold_test: {
      color: "green",
    },
  };
  const number = 5;

  return (
    <div style={style.App}>
      <MyHeader />
      <h2 style={style.h2}>안녕 리액트 {name}</h2>
      <b id="bold_text" style={style.bold_test}>
        {number}는 : {number % 2 === 0 ? "짝수" : "홀수"}
      </b>
      <MyFooter />
    </div>
  );
}

export default App;
