interface GameWordsProps {
    guessWord: string;
    guessedLetters: string[];
  }
  
export const GameWords: React.FC<GameWordsProps> = ({ guessWord, guessedLetters }) => {
    // const guessedLetter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k']
    return (
      <div className="words">
        {guessWord.split('').map((letter, index) => (
          <span key={index} className="letters">
            <span 
                style={{
                visibility: (guessedLetters && guessedLetters.includes(letter)) ? 'visible' : 'hidden'
            }}
            >
                {letter}
            </span>
          </span>
        ))}
      </div>
    );
  };