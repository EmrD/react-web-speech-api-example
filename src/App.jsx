import React, { useState } from 'react';

const App = () => {
  const [text, setText] = useState('');

  const speakText = () => {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  };

  return (
    <div>
      <h1>Web Speech API Example</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={speakText}>Text to Speech</button>
    </div>
  );
};

export default App;
