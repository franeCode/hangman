import { useEffect, useState } from "react";

type GameWordsProps = {
    guessWord: string;
    guessedLetters: string[];
    reveal?: boolean;
    isWinner: boolean;
    isLoser: boolean;
    // displayMessage?: string;
  }
  
export function GameWords({ isWinner, isLoser, guessWord, guessedLetters, reveal=false }: GameWordsProps) {
 
  return (
      <div className="words text-chalk-effect">
        <div className='message-container'>
            {isWinner && <p className="message text-chalk-effect">Winner!</p>}
            {isLoser && <p className="message text-chalk-effect">Looser!</p>}
        </div>
        <div>
        {guessWord.split('').map((letter, index) => (
          <span key={index} className="letters">
            <span 
                style={{
                  visibility: (guessedLetters && guessedLetters.includes(letter)) || reveal
                  ? "visible"
                  : "hidden",
                  color:
                    !guessedLetters.includes(letter) && reveal ? "red" : "white",
                  }}
                >
                {letter}
            </span>
          </span>
        ))}
        </div>
      </div>
    );
  }