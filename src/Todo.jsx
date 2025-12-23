function Todo() {
  return (
    <div>
      <h1>Welcome to my page</h1>
      <img src="src/assets/imgpng.webp" alt="image" />
      <ul>
        <li>Learn to react</li>
        <li>Practice daily</li>
        <li>Build projects</li>
      </ul>
      <button onClick={() => alert("Functions called")}>click me</button>
    </div>
  );
}
export default Todo;
