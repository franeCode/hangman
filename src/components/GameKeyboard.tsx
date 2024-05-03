type GameKeyboardProps = {
  activeLetters: string[]
  inactiveLetters: string[]
  addGuessedLetter: (letter: string) => void
  disabled?: boolean
  startNewGame: () => void;
  isWinner: boolean;
  isLoser: boolean;
};

export function GameKeyboard({ activeLetters, inactiveLetters, isWinner, isLoser, addGuessedLetter, startNewGame, disabled = false }: GameKeyboardProps) {

  const alphabet = "abcdefghijklmnopqrstuvwxyz".split('')

  return (
    <div className='keyboard'>
      {alphabet.map((key) => {
        const isActive = activeLetters.includes(key)
        const isInactive = inactiveLetters.includes(key)
        const keyClass = `keyboard-key key-chalk-effect text-chalk-effect ${isActive ? 'active' : ''} ${isInactive ? 'inactive' : ''}`
        return (
          <button
            onClick={() => addGuessedLetter(key)}
            key={key}
            className={keyClass}
            disabled={isInactive || isActive || disabled}
          >
            {key}
          </button>
        )
      })}
      <button onClick={startNewGame} className={`key-chalk-effect reset text-chalk-effect ${isWinner || isLoser ? 'red' : 'white'}`}>
        RESET
      </button>
    </div>
  );
}
