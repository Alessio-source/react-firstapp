import React, { useState } from "react";
import Button from "./components/Button.js"

//JSX il div è un falso elemento html (è un elemento react)

function App() {
  const [text, setText] = useState('Clicca Qui');

  function ClickConReact(event) {
    setText('Ciao');
  }

  return (
    <div>
      <p>Hello Word</p>
      <Button text={text} handleClick={ClickConReact} />
    </div>
  );
}

export default App