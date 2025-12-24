import { useState } from "react";

function Profile() {
  const [counter, setCounter] = useState(0);
  const [rcounter, setRcounter] = useState(10);

  return (
    <div>
      <h1>count:{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <h1>Rcounter:{rcounter}</h1>
      <button onClick={() => setRcounter(rcounter - 1)}>Decrement</button>
    </div>
  );
}
export default Profile;
