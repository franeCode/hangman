type GameKeyboardProps = {
    activeLetters: string[]
    inactiveLetters: string[]
    addGuessedLetter: (letter: string) => void
    disabled?: boolean
    alphabet: string[]
    startNewGame: () => void;
};

export function GameKeyboard({ activeLetters, inactiveLetters, addGuessedLetter, startNewGame, disabled=false, alphabet }: GameKeyboardProps) {
  return (
    <div className='keyboard'>
      {alphabet.map((key) => {
        const isActive = activeLetters.includes(key)
        const isInactive = inactiveLetters.includes(key)
        return (
        <button 
          onClick={() => addGuessedLetter(key)} 
          key={key} 
          className={`keyboard-key key-chalk-effect text-chalk-effect ${isActive ? 'keyboard-key.active' : ""} ${isInactive ? 'keyboard-key.inactive' : ""}`}
          disabled={isInactive || isActive || disabled}
          >
          {key}
        </button>
      )})}
      <button onClick={startNewGame} className="key-chalk-effect reset text-chalk-effect">RESET</button>
    </div>
  );
}