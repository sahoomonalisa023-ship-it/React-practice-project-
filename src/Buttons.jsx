//click Event and function call
function Buttons() {
  function Callfun() {
    alert("function called");
  }
  const Fruit = () => {
    alert("apple");
  };
  const Fruits = (name) => {
    alert(name);
  };

  return (
    <div>
      <h1>color</h1>
      <button onClick={Callfun}>click me</button>
      <h1>health</h1>
      <button onClick={Fruit}>click me</button>
      <h1>FRUITS</h1>
      <button onClick={() => Fruits("apple")}>Apple</button>
      <button onClick={() => Fruits("banana")}>Banana</button>
    </div>
  );
}
export default Buttons;
