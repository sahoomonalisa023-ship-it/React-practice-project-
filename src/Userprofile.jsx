function Userprofile() {
  return (
    <>
      <h1>User login</h1>
    </>
  );
}

export function Profile() {
  return (
    <>
      <h1>profile</h1>
    </>
  );
}

export function Setting() {
  return (
    <>
      <h2>settings</h2>
    </>
  );
}
export function Customer() {
  const Usernames = "Monalisa";
  let x = 20;
  let y = 30;
  return (
    <>
      <h1>{Usernames}</h1>
      <h1>{10 + 20 + 30}</h1>
      <h1>{x * y}</h1>
      <button onClick={() => alert("hello")}>click</button>
    </>
  );
}
export const Userkey = "74438938494";

export default Userprofile;
