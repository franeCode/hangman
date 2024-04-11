interface GameWordsProps {
    guessWord: string;
  }
  
export const GameWords: React.FC<GameWordsProps> = ({ guessWord }) => {
    return (
      <div>
        The guessed word is: {guessWord}
      </div>
    );
  };