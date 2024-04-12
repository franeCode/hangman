type GameKeyboardProps = {
    activeLetters: string[]
    inactiveLetters: string[]
    addGuessedLetter: (letter: string) => void
    disabled?: boolean
};

export function GameKeyboard({ activeLetters, inactiveLetters, addGuessedLetter, disabled=false }: GameKeyboardProps) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  return (
    <div className='keyboard-container'>
      {alphabet.map((key) => {
        const isActive = activeLetters.includes(key)
        const isInactive = inactiveLetters.includes(key)
        return (
        <button 
          onClick={() => addGuessedLetter(key)} 
          key={key} 
          className={`keyboard-key ${isActive ? 'keyboard-key.active' : ""} ${isInactive ? 'keyboard-key.inactive' : ""}`}
          disabled={isInactive || isActive || disabled}
          >
          {key}
        </button>
      )})}
    </div>
  );
}