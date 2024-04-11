interface GameWordsProps {
    guessWord: string;
  }
  
export const GameWords: React.FC<GameWordsProps> = ({ guessWord }) => {
    const guessedLetter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k']
    return (
      <div className="words">
        {guessWord.split('').map((letter, index) => (
          <span key={index} className="letters">
            <span 
                style={{
                visibility: guessedLetter.includes(letter) ? 'visible' : 'hidden'
            }}
            >
                {letter}
            </span>
          </span>
        ))}
      </div>
    );
  };