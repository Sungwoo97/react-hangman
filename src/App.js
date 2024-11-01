import './App.css';
import React, { useState } from 'react';
import GameBoard from './GameBoard';
import SetWord from './SetWord';
import { Routes, Route } from "react-router-dom";

function App() {
  const [ maxError, setMaxError] = useState(0);
  const [ answerLength, setAnswerLength ] = useState(0);

  const [ secretWord, setSecretWord] = useState(()=>{
    let word = window.localStorage.getItem('secretWord') ;
    word && word.length > 0 ? setAnswerLength(word.length) : setAnswerLength(0);
    word && word.length > 0 ? setMaxError(word.length + 2) : setMaxError(1);
    return word || '';
  });

  // if(secretWord.length > -1){
  //   setMaxError(secretWord.length + 2);
  // }else{
  //   setMaxError(1);
  // }
  
  return (
    <div className="App">
      <h1>Hangman</h1>
      <p>Do you want to play game</p>
      <Routes>
        <Route path="/" element={<GameBoard secretWord={secretWord} maxError={maxError} answerLength={answerLength} /> } />
        <Route path="/admin" element={<SetWord />} />
      </Routes>
    </div>
  );
}

export default App;
