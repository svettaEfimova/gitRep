import React, { useState, useEffect } from 'react';

import './App.css';

import TextAreaContainer from './components/TextArea/TextAreaContainer';
import { useSelector } from 'react-redux';
import MessagesList from './components/TextArea/MessagesList';



function App() {
  const [messages, setMessages]= useState([]);
  const storedText =useSelector(state=> state.textAreaPage.text);
  const collectMessages=()=>{
    setMessages([...messages, storedText])
  }
useEffect(()=> {
  collectMessages()
}, [storedText])

  return (
    <div className="App">
      
    <TextAreaContainer/>
    <MessagesList list={messages}/>
    </div>
  );
}

export default App;
