import React, { useState, useCallback } from 'react';
import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';
import './App.css';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  const togglePragraph = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevShowPraragraph) => !prevShowPraragraph);
    }
  }, [allowToggle]);
  console.log(showParagraph);
  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow Toggle </Button>
      <Button onClick={togglePragraph}> Show me the Money</Button>
    </div>
  );
}

export default App;
