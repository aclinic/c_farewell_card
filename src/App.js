import React, { useState, useEffect } from 'react';

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import FarewellCards from './FarewellCards'

const App = () => {
  const [messages, setMessages] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/messages')
      .then(resp => resp.json())
      .then(resp => {
        setMessages(resp)
      })
  }, [])
  return (
    <div className="App">
      <FarewellCards messages={messages} />
    </div>
  );
}

export default App;
