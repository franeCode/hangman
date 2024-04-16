import { useEffect, useState } from "react";

type GameWordsProps = {
    guessWord: string;
    guessedLetters: string[];
    reveal?: boolean;
    displayMessage?: string;
  }
  
export function GameWords({ guessWord, guessedLetters, reveal=false, displayMessage }: GameWordsProps) {
 
  return (
      <div className="words text-chalk-effect">
        {displayMessage && <div className="message">{displayMessage}</div>}
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
    );
  }