type GameWordsProps = {
    guessWord: string;
    guessedLetters: string[];
    reveal?: boolean;
  }
  
export function GameWords({ guessWord, guessedLetters, reveal=false }: GameWordsProps) {
    return (
      <div className="words">
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