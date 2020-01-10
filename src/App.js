import React, { useState, useEffect } from 'react';

import queryString from 'query-string'

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import FarewellCards from './FarewellCards'
import FarewellMessageEditBox from './FarewellMessageEditBox'

const App = (props) => {
  const [messages, setMessages] = useState([])
  const [id, setId] = useState(null)

  useEffect(() => {
    const values = queryString.parse(window.location.search)
    if (values.id) {
      setId(values.id)
    }

    fetch('https://cory-farewell-card.herokuapp.com/messages')
      .then(resp => resp.json())
      .then(resp => {
        setMessages(resp)
      })
  }, [])

  const conditionalEditBox = (id && <FarewellMessageEditBox id={id} />)
  return (
    <div className="App">
      <h1>Farewell Cory! Best wishes for your new life out west!</h1>
      {conditionalEditBox}
      <FarewellCards messages={messages} />
    </div>
  );
}

export default App;
