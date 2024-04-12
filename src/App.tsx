import './App.css'
import React, { useState, useCallback, useEffect } from 'react'
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

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const incorrectLetters = guessedLetters.filter(
    letter => !guessWord.includes(letter)
  )

  const isLoser = incorrectLetters.length >= 6
  const isWinner = guessWord
    .split("")
    .every(letter => guessedLetters.includes(letter))

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return

      setGuessedLetters(currentLetters => [...currentLetters, letter])
    },
    [guessedLetters, isWinner, isLoser]
  )

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if (!key.match(/^[a-z]$/)) return

      e.preventDefault()
      addGuessedLetter(key)
    }

    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [guessedLetters, addGuessedLetter])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if (key !== "Enter") return

      e.preventDefault()
      setGuessedLetters([])
      setGuessWord(guessWord)
    }

    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [guessWord])

  const startNewGame = () => {
    setGuessWord(guessWord); // Set a new word to guess
    setGuessedLetters([]); // Reset the guessed letters
  };


  return (
    <>
      <div className='game-container'>
        <h1>Hangman</h1>
        <div className='message'>
        {isWinner && "Winner! - Click to try again"}
        {isLoser && "Nice Try - Click to try again"}
        <button onClick={startNewGame}>Start New Game</button>
        </div>
        <GameDrawing numberOfGuessedLetters={incorrectLetters.length} />
        <GameWords 
          reveal={isLoser}
          guessWord={guessWord}
          guessedLetters={guessedLetters}
         /> 
        <GameKeyboard
          disabled={isWinner || isLoser}
          activeLetters={guessedLetters.filter(letter =>
          guessWord.includes(letter)
          )}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
           />
      </div>
    </>
  )
}

export default App
