import React from "react";

function App() {
  const utilisateurs = [
    { id: "1", n: "Mohamed", mail: "mouhamed@gmail.com", tel: "22555163" },
    {
      id: "2",
      n: "foulen ben foulen",
      mail: "foulenbenfoulen@gmail.com",
      tel: "55555106",
    },
  ];
  return (
    <ul>
      {utilisateurs.map((utilisateur) => (
        <li key={utilisateur.id}>
          <p>{utilisateur.n} </p>
          <p>{utilisateur.mail}</p>
          <p>{utilisateur.tel}</p>
        </li>
      ))}
    </ul>
  );
}
export default App;

/*import React, { useState } from "react";
function App() {
  const [counter, setCounter] = useState(0);
  const handleClick1 = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h1> {counter}</h1>
      <button onClick={handleClick1}>cliquer ici</button>
    </div>
  );
}
export default App;/*

/*import React from "react";

import data from "./data";
function App() {
  return (
    <div>
      <div>
        {data.map((data) => (
          <div>
            <input type="checkbox" />
            <label>{data.text}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;*/
