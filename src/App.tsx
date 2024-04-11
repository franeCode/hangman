import './App.css'
import React, { useState } from 'react'
import words from './common.json'
import { GameDrawing } from './components/GameDrawing';
import { GameWords } from './components/GameWords';
import { GameKeyboard } from './components/GameKeyboard';


function App() {
  
  const commonWordsArray: string[] = words.commonWords;

  const [guessWord, setGuessWord] = useState<string>(() => {
    const randomIndex = Math.floor(Math.random() * commonWordsArray.length);
    return commonWordsArray[randomIndex];
  });


  return (
    <>
      <div className='game-container'>
        <h1>Hangman</h1>
        <div className='message'>Win/Lose</div>
        <GameDrawing />
        <GameWords guessWord={guessWord} /> 
        <GameKeyboard />
      </div>
    </>
  )
}

export default App
