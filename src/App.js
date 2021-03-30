import React, { useState } from "react";
import Button from "./components/Button.js"

//JSX il div è un falso elemento html (è un elemento react)

function App() {
  const [text, setText] = useState('Clicca Qui');
  const [title] = useState('Hello world');

  function ClickConReact(event) {
    setText('Ciao');
  }

  return (
    <div>
      <h1>{ title }</h1>
      <Button text={text} handleClick={ClickConReact} />
    </div>
  );
}

export default App