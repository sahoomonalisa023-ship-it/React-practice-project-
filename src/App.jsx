import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import Userprofile, {
  Profile,
  Setting,
  Userkey,
  Customer,
} from "./Userprofile";
import Todo from "./Todo";

function App() {
  const name = "Monalisa";
  let x = 20;
  let y = 90;
  function Fruits() {
    return "Apple";
  }
  function sum(a, b) {
    return a + b;
  }
  return (
    <>
      <h1>React Small project {sum()}</h1>
      <Userprofile />
      <Color />
      <Profile />
      <Setting />
      <Customer />
      <h1>{Userkey}</h1>
      <h2>{name}</h2>
      <h2>{x + y}</h2>
      <h1> {Fruits()}</h1>
      <h1>{sum(20, 30)}</h1>
      <Todo />
    </>
  );
}

function Color() {
  return <>{/* <h1>Pink</h1> */}</>;
}

function sum() {
  return 10 + 10;
}
export default App;
