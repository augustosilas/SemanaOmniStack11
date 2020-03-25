import React, { useState } from "react";

import Header from "./Header";
// JSX (JavaScript XML)
// Componente é uma função que retorna HTML

function App() {
  const [counter, setCounter] = useState(0);

  function incremente() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <Header>Contador: {counter}</Header>
      <button onClick={incremente}>Incrementar</button>
    </div>
  );
}

export default App;
