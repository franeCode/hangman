import './App.css'
import React, { useState, useCallback, useEffect } from 'react'
import englishWords from './english_words.json'
import germanWords from './german_words.json';
import { GameDrawing } from './components/GameDrawing';
import { GameWords } from './components/GameWords';
import { GameKeyboard } from './components/GameKeyboard';
import { GameHeader } from './components/GameHeader';
import { Footer } from './components/Footer';
import { GameMessages } from './components/GameMessages';

const englishWordsArray: string[] = (englishWords as { commonWords: string[] }).commonWords;
const germanWordsArray: string[] = germanWords as string[]; 

function App() {
  
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  const [language, setLanguage] = useState<'english' | 'german'>('english');
  const [guessWord, setGuessWord] = useState(getRandomWord(language));
  const [alphabet, setAlphabet] = useState('abcdefghijklmnopqrstuvwxyz'.split(''));
  
  function getRandomWord(language: 'english' | 'german'): string {
    const words = language === 'german' ? germanWordsArray : englishWordsArray;
    return words[Math.floor(Math.random() * words.length)];
  }

  // Plan to add more languages in the future
  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const language = event.target.value as 'english' | 'german';
    setLanguage(language);
    setGuessWord(getRandomWord(language));
    setAlphabet(language === 'german' ? 'abcdefghijklmnopqrstuvwxyzäöüß'.split('') : 'abcdefghijklmnopqrstuvwxyz'.split('')); 
    setGuessedLetters([]);
  };

  const startNewGame = () => {
    setGuessWord(getRandomWord(language));
    setGuessedLetters([]);
  };

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

  return (
    <>
      <GameHeader 
        />
        <GameMessages
          isLoser={isLoser}
          isWinner={isWinner}
          />
      <div className='game-container'>
        <div className='drawing-container'>
          <GameDrawing 
            numberOfGuessedLetters={incorrectLetters.length} />
        </div>
        <div className='keyboard-container'>
          <GameWords 
            reveal={isLoser}
            guessWord={guessWord}
            guessedLetters={guessedLetters}
          /> 
          <GameKeyboard
            isLoser={isLoser} 
            isWinner={isWinner}
            disabled={isWinner || isLoser}
            activeLetters={guessedLetters.filter(letter =>
            guessWord.includes(letter)
            )}
            inactiveLetters={incorrectLetters}
            addGuessedLetter={addGuessedLetter}
            alphabet={alphabet}
            startNewGame={startNewGame}
          />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
